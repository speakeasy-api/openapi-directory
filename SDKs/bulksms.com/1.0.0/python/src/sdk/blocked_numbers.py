import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class BlockedNumbers:
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

    
    def get_blocked_numbers(self, request: operations.GetBlockedNumbersRequest) -> operations.GetBlockedNumbersResponse:
        r"""List blocked numbers
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/blocked-numbers"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetBlockedNumbersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BlockedNumber])
                res.blocked_number = out

        return res

    
    def post_blocked_numbers(self, request: operations.PostBlockedNumbersRequest) -> operations.PostBlockedNumbersResponse:
        r"""Create a blocked number
        Blocked numbers are phone numbers to which your account is not permitted to send messages.
        The numbers can be created via this API, by a recipient replying with a STOP message to one
        of your previous SENT messages, or by a BulkSMS administrator.
        
        Sending a message to a blocked number will result in the message being assigned a status of
        `FAILED.BLOCKED`. Messages sent to blocked numbers are billed to your account.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/blocked-numbers"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostBlockedNumbersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    