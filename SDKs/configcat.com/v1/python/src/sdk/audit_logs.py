import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class AuditLogs:
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

    
    def get_auditlogs(self, request: operations.GetAuditlogsRequest) -> operations.GetAuditlogsResponse:
        r"""List Audit log items for Product
        This endpoint returns the list of Audit log items for a given Product 
        and the result can be optionally filtered by Config and/or Environment.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/products/{productId}/auditlogs", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAuditlogsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/hal+json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.AuditLogItemModel]])
                res.audit_log_item_models = out
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.AuditLogItemModel]])
                res.audit_log_item_models = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 429:
            pass

        return res

    
    def get_deleted_settings(self, request: operations.GetDeletedSettingsRequest) -> operations.GetDeletedSettingsResponse:
        r"""List Deleted Settings
        This endpoint returns the list of Feature Flags and Settings that were deleted from the given Config.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/configs/{configId}/deleted-settings", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDeletedSettingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/hal+json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.SettingModelHaljson]])
                res.setting_model_haljsons = out
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.SettingModel]])
                res.setting_models = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 429:
            pass

        return res

    
    def get_organization_auditlogs(self, request: operations.GetOrganizationAuditlogsRequest) -> operations.GetOrganizationAuditlogsResponse:
        r"""List Audit log items for Organization
        This endpoint returns the list of Audit log items for a given Organization 
        and the result can be optionally filtered by Product and/or Config and/or Environment.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/organizations/{organizationId}/auditlogs", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationAuditlogsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/hal+json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.AuditLogItemModel]])
                res.audit_log_item_models = out
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.AuditLogItemModel]])
                res.audit_log_item_models = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 429:
            pass

        return res

    