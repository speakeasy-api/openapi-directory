import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Usage:
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

    
    def put_v3_usage_batches_id_(self, request: operations.PutV3UsageBatchesIDRequest) -> operations.PutV3UsageBatchesIDResponse:
        r"""Report usage of assets via a batch format.
        # Report Usage
        
        Use this endpoint to report the usages of a set of assets. The count of assets submitted in a single batch to this endpoint is limited to 1000. Note that all asset Ids specified must be valid or the operation will fail causing no usages to be recorded. In this case, you will need to remove the invalid asset Ids from the query request and re-submit the query.
        
        ##  Quickstart
        
        You'll need an API key and a [Resource Owner Grant](http://developers.gettyimages.com/en/authorization-faq.html) access token to use this resource.
        Please see our [Getting Started](http://developers.gettyimages.com/en/getting-started.html) page for more information on how to sign up for an API key. 
        
        _Note_: Date of use can be in any unambiguous date format.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/usage-batches/{id}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutV3UsageBatchesIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ReportUsageBatchResponse])
                res.report_usage_batch_response = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 409:
            pass

        return res

    