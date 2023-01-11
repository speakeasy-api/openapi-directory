import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class AuditLog:
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

    
    def audit_log_get_audit_log(self, request: operations.AuditLogGetAuditLogRequest) -> operations.AuditLogGetAuditLogResponse:
        r"""Get the audit log for an enterprise
        **Note:** The audit log REST API is currently in beta and is subject to change.
        
        Gets the audit log for an enterprise. To use this endpoint, you must be an enterprise admin, and you must use an access token with the `admin:enterprise` scope.
        https://docs.github.com/rest/reference/enterprise-admin#get-the-audit-log-for-an-enterprise - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/enterprises/{enterprise}/audit-log", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AuditLogGetAuditLogResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.AuditLogEvent]])
                res.audit_log_events = out

        return res

    