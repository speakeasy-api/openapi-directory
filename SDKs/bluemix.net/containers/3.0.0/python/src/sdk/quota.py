import requests
from typing import Any,Optional
from sdk.models import operations
from . import utils

class Quota:
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

    
    def get_containers_quota(self, request: operations.GetContainersQuotaRequest) -> operations.GetContainersQuotaResponse:
        r"""Retrieve organization and space specific quota
        Retrieve the quota that is assigned to the organization and space.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/containers/quota"
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetContainersQuotaResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.containers_quota_info = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def get_containers_usage(self, request: operations.GetContainersUsageRequest) -> operations.GetContainersUsageResponse:
        r"""List container sizes and quota limits
        This endpoint returns a list of available container sizes and the quota limit and usage for the space. 
        
        - Container sizes: A list of available container sizes indicating the amount of container memory, disk space and virtual CPUs that can be assigned to the container.
        - Quota limit: Lists the number of containers, public IP addresses, available container memory, and virtual CPUS that are allocated to a space. 
        - Quota usage: Lists the current number of containers, images, and public IP addresses in a space that is counted towards your quota limit. 
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/containers/usage"
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetContainersUsageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.containers_usage_info = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def put_containers_quota(self, request: operations.PutContainersQuotaRequest) -> operations.PutContainersQuotaResponse:
        r"""Update space quota
        This endpoint updates the quota that is allocated to a Bluemix space. 
        
         **Note**: Only paid accounts are eligbile to update the space quota. If you are using a free-trial account, upgrade to a paid account first.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/containers/quota"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutContainersQuotaResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass

        return res

    