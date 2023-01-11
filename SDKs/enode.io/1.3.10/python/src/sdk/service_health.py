import requests
from typing import Optional
from sdk.models import operations
from . import utils

class ServiceHealth:
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

    
    def get_health_ready(self) -> operations.GetHealthReadyResponse:
        r"""Check Service Readiness
        Gets the combined health status of the service and all functionalities and dependencies.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/health/ready"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetHealthReadyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 503:
            if utils.match_content_type(content_type, "application/json"):
                res.get_health_ready_503_application_json_string = r.content

        return res

    
    def get_health_vendors(self) -> operations.GetHealthVendorsResponse:
        r"""Check Available Vendors
        List the supported vendors and their current status.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/health/vendors"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetHealthVendorsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[operations.GetHealthVendors200ApplicationJSON]])
                res.get_health_vendors_200_application_json_objects = out

        return res

    