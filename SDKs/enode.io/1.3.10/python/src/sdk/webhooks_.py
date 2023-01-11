import requests
from sdk.models import operations
from . import utils

class Webhooks:
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

    
    def post_webhooks_firehose_test(self, request: operations.PostWebhooksFirehoseTestRequest) -> operations.PostWebhooksFirehoseTestResponse:
        r"""Test Firehose Webhook
        Trigger a test payload to be sent to your configured Firehose Webhook url.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/webhooks/firehose/test"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostWebhooksFirehoseTestResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                res.post_webhooks_firehose_test_default_application_json_string = r.content

        return res

    
    def put_webhooks_firehose(self, request: operations.PutWebhooksFirehoseRequest) -> operations.PutWebhooksFirehoseResponse:
        r"""Update Firehose Webhook
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/webhooks/firehose"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutWebhooksFirehoseResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    