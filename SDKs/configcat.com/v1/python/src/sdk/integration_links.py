import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class IntegrationLinks:
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

    
    def add_or_update_integration_link(self, request: operations.AddOrUpdateIntegrationLinkRequest) -> operations.AddOrUpdateIntegrationLinkResponse:
        r"""Add or update Integration link
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/environments/{environmentId}/settings/{settingId}/integrationLinks/{integrationLinkType}/{key}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AddOrUpdateIntegrationLinkResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/hal+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.IntegrationLinkModel])
                res.integration_link_model = out
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.IntegrationLinkModel])
                res.integration_link_model = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 429:
            pass

        return res

    
    def delete_integration_link(self, request: operations.DeleteIntegrationLinkRequest) -> operations.DeleteIntegrationLinkResponse:
        r"""Delete Integration link
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/environments/{environmentId}/settings/{settingId}/integrationLinks/{integrationLinkType}/{key}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteIntegrationLinkResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/hal+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DeleteIntegrationLinkModel])
                res.delete_integration_link_model = out
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DeleteIntegrationLinkModel])
                res.delete_integration_link_model = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 429:
            pass

        return res

    
    def get_integration_link_details(self, request: operations.GetIntegrationLinkDetailsRequest) -> operations.GetIntegrationLinkDetailsResponse:
        r"""Get Integration link
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/integrationLink/{integrationLinkType}/{key}/details", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetIntegrationLinkDetailsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/hal+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.IntegrationLinkDetailsModel])
                res.integration_link_details_model = out
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.IntegrationLinkDetailsModel])
                res.integration_link_details_model = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 429:
            pass

        return res

    