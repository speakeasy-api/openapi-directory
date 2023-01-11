import requests
from typing import Optional
from enum import Enum
from sdk.models import shared, operations
from . import utils

class Admin:
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

    
    def create_global_rule(self, request: operations.CreateGlobalRuleRequest) -> operations.CreateGlobalRuleResponse:
        r"""Create global rule
        Adds a rule to the list of globally configured rules.
        
        This operation can fail for the following reasons:
        
        * The rule type is unknown (HTTP error `400`)
        * The rule already exists (HTTP error `409`)
        * A server error occurred (HTTP error `500`)
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/admin/rules"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateGlobalRuleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out
        elif r.status_code == 409:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def create_role_mapping(self, request: operations.CreateRoleMappingRequest) -> operations.CreateRoleMappingResponse:
        r"""Create a new role mapping
        Creates a new mapping between a user/principal and a role.
        
        This operation can fail for the following reasons:
        
        * A server error occurred (HTTP error `500`)
        
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/admin/roleMappings"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateRoleMappingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def delete_all_global_rules(self) -> operations.DeleteAllGlobalRulesResponse:
        r"""Delete all global rules
        Deletes all globally configured rules.
        
        This operation can fail for the following reasons:
        
        * A server error occurred (HTTP error `500`)
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/admin/rules"
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteAllGlobalRulesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def delete_global_rule(self, request: operations.DeleteGlobalRuleRequest) -> operations.DeleteGlobalRuleResponse:
        r"""Delete global rule
        Deletes a single global rule.  If this is the only rule configured, this is the same
        as deleting **all** rules.
        
        This operation can fail for the following reasons:
        
        * Invalid rule name/type (HTTP error `400`)
        * No rule with name/type `rule` exists (HTTP error `404`)
        * Rule cannot be deleted (HTTP error `409`)
        * A server error occurred (HTTP error `500`)
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/admin/rules/{rule}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteGlobalRuleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def delete_role_mapping(self, request: operations.DeleteRoleMappingRequest) -> operations.DeleteRoleMappingResponse:
        r"""Delete a role mapping
        Deletes a single role mapping, effectively denying access to a user/principal.
        
        This operation can fail for the following reasons:
        
        * No role mapping for the principalId exists (HTTP error `404`)
        * A server error occurred (HTTP error `500`)
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/admin/roleMappings/{principalId}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteRoleMappingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def export_data(self) -> operations.ExportDataResponse:
        r"""Export registry data
        Exports registry data as a ZIP archive.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/admin/export"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ExportDataResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/zip"):
                res.file_content = r.content
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def get_global_rule_config(self, request: operations.GetGlobalRuleConfigRequest) -> operations.GetGlobalRuleConfigResponse:
        r"""Get global rule configuration
        Returns information about the named globally configured rule.
        
        This operation can fail for the following reasons:
        
        * Invalid rule name/type (HTTP error `400`)
        * No rule with name/type `rule` exists (HTTP error `404`)
        * A server error occurred (HTTP error `500`)
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/admin/rules/{rule}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGlobalRuleConfigResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Rule])
                res.rule = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def get_log_configuration(self, request: operations.GetLogConfigurationRequest) -> operations.GetLogConfigurationResponse:
        r"""Get a single logger configuration
        Returns the configured logger configuration for the provided logger name, if no logger configuration is persisted it will return the current default log configuration in the system.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/admin/loggers/{logger}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetLogConfigurationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NamedLogConfiguration])
                res.named_log_configuration = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def get_role_mapping(self, request: operations.GetRoleMappingRequest) -> operations.GetRoleMappingResponse:
        r"""Return a single role mapping
        Gets the details of a single role mapping (by principalId).
        
        This operation can fail for the following reasons:
        
        * No role mapping for the principalId exists (HTTP error `404`)
        * A server error occurred (HTTP error `500`)
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/admin/roleMappings/{principalId}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRoleMappingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RoleMapping])
                res.role_mapping = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def import_data(self, request: operations.ImportDataRequest) -> operations.ImportDataResponse:
        r"""Import registry data
        Imports registry data that was previously exported using the `/admin/export` operation.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/admin/import"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ImportDataResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            pass
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def list_global_rules(self) -> operations.ListGlobalRulesResponse:
        r"""List global rules
        Gets a list of all the currently configured global rules (if any).
        
        This operation can fail for the following reasons:
        
        * A server error occurred (HTTP error `500`)
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/admin/rules"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ListGlobalRulesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.RuleTypeEnum]])
                res.rule_types = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def list_log_configurations(self) -> operations.ListLogConfigurationsResponse:
        r"""List logging configurations
        List all of the configured logging levels.  These override the default
        logging configuration.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/admin/loggers"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ListLogConfigurationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.NamedLogConfiguration]])
                res.named_log_configurations = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def list_role_mappings(self) -> operations.ListRoleMappingsResponse:
        r"""List all role mappings
        Gets a list of all role mappings configured in the registry (if any).
        
        This operation can fail for the following reasons:
        
        * A server error occurred (HTTP error `500`)
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/admin/roleMappings"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ListRoleMappingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.RoleMapping]])
                res.role_mappings = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def remove_log_configuration(self, request: operations.RemoveLogConfigurationRequest) -> operations.RemoveLogConfigurationResponse:
        r"""Removes logger configuration
        Removes the configured logger configuration (if any) for the given logger.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/admin/loggers/{logger}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.RemoveLogConfigurationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NamedLogConfiguration])
                res.named_log_configuration = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def set_log_configuration(self, request: operations.SetLogConfigurationRequest) -> operations.SetLogConfigurationResponse:
        r"""Set a logger's configuration
        Configures the logger referenced by the provided logger name with the given configuration.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/admin/loggers/{logger}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SetLogConfigurationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NamedLogConfiguration])
                res.named_log_configuration = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def update_global_rule_config(self, request: operations.UpdateGlobalRuleConfigRequest) -> operations.UpdateGlobalRuleConfigResponse:
        r"""Update global rule configuration
        Updates the configuration for a globally configured rule.
        
        This operation can fail for the following reasons:
        
        * Invalid rule name/type (HTTP error `400`)
        * No rule with name/type `rule` exists (HTTP error `404`)
        * A server error occurred (HTTP error `500`)
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/admin/rules/{rule}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateGlobalRuleConfigResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Rule])
                res.rule = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def update_role_mapping(self, request: operations.UpdateRoleMappingRequest) -> operations.UpdateRoleMappingResponse:
        r"""Update a role mapping
        Updates a single role mapping for one user/principal.
        
        This operation can fail for the following reasons:
        
        * No role mapping for the principalId exists (HTTP error `404`)
        * A server error occurred (HTTP error `500`)
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/admin/roleMappings/{principalId}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateRoleMappingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    