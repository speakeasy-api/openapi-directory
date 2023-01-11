import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Attachments:
    _client: requests.Session
    _security_client: requests.Session
    _server_url: str
    _language: str
    _sdk_version: str
    _gen_version: str

    def __init__(self, client: requests.Session, security_client: requests.Session, server_url: str, language: str, sdk_version: str, gen_version: str) -> None:
        self._client = client
        self._security_client = security_client
        self._server_url = server_url
        self._language = language
        self._sdk_version = sdk_version
        self._gen_version = gen_version

    
    def post_rmm_pre_sign_attachment(self, request: operations.PostRmmPreSignAttachmentRequest) -> operations.PostRmmPreSignAttachmentResponse:
        r"""Upload an attachment via a signed URL
        You can send any URL as part of your SMS text.  When the recipient taps on the URL, the file to which the URL points will be downloaded and opened on the mobile device.  This handy feature is supported by most modern mobile devices.
        
        The best way to send an attachment is to store the file on a web server you own and use that URL in the SMS text.  Your customer will then see a URL that she will recognise as belonging to you.  This is the most flexible and the simplest solution.
        
        However, if it is not possible to use your web server, you can use BulkSMS storage to keep the files that you want to attach to your SMS message.  Please note that these files will be deleted after 30 days.   
        
        The process to use the BulkSMS storage requires you to take three steps:
        
        **Step 1**: Use your BulkSMS credentials (or your API Token) to request a pre-signed URL.  This is what this `pre-sign-attachment` method is for.  It returns a PreSignInfo object that you will use in the other two steps.
        
        **Step 2**: Upload the file using a standard HTTP `PUT` request. For your `PUT` request, use the value of `putURL` from the PreSignInfo object as the request address.  You also have to add the entries from the `fields` property (of the PreSignInfo object) to the headers of your 'PUT' request. You send the file content as the body of the `PUT` request.
        
        **Step 3**: Now you can use the value of `fetchURL` from the PreSignInfo object in the body of your SMS messages and send those using the usual messaging API (described elsewhere in this document).  If you send the same file to many recipients, it is safe to use the same URL for all of them.
        
        If you need to, take a closer look at the example program (on the right-hand side) to get a better idea of how to implement this process.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/rmm/pre-sign-attachment"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostRmmPreSignAttachmentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PreSignInfo])
                res.pre_sign_info = out

        return res

    