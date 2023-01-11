import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class SnmPv3:
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

    
    def protocol_snmpv3_access_add(self, request: operations.ProtocolSnmpv3AccessAddRequest) -> operations.ProtocolSnmpv3AccessAddResponse:
        r"""Adds a new access entry with the specified parameters.
        Adds a new access entry with the specified parameters.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/access/add/{groupName}/{prefix}/{securityModel}/{securityLevel}/{contextMatch}/{readView}/{writeView}/{notifyView}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolSnmpv3AccessAddResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.protocol_snmpv3_access_add_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_snmpv3_access_clear(self, request: operations.ProtocolSnmpv3AccessClearRequest) -> operations.ProtocolSnmpv3AccessClearResponse:
        r"""Clears all access entries.
        Clears all access entries.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/access/clear", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolSnmpv3AccessClearResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.protocol_snmpv3_access_clear_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_snmpv3_access_del(self, request: operations.ProtocolSnmpv3AccessDelRequest) -> operations.ProtocolSnmpv3AccessDelResponse:
        r"""Deletes the specified access entry.
        Deletes the specified access entry.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/access/del/{accessName}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolSnmpv3AccessDelResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.protocol_snmpv3_access_del_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_snmpv3_access_list(self, request: operations.ProtocolSnmpv3AccessListRequest) -> operations.ProtocolSnmpv3AccessListResponse:
        r"""Returns the current acccess entries as an array of strings.
        Returns the current acccess entries as an array of strings.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/access/list", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolSnmpv3AccessListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[str]])
                res.protocol_snmpv3_access_list_200_application_json_strings = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_snmpv3_get_config(self, request: operations.ProtocolSnmpv3GetConfigRequest) -> operations.ProtocolSnmpv3GetConfigResponse:
        r"""Returns the SNMPv3 configuration.
        Returns the SNMPv3 configuration.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/get/config", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolSnmpv3GetConfigResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConfigSnmPv3])
                res.config_snm_pv3 = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_snmpv3_get_context_engineid(self, request: operations.ProtocolSnmpv3GetContextEngineidRequest) -> operations.ProtocolSnmpv3GetContextEngineidResponse:
        r"""Retrieves the contextEngineID for the agent instance.
        Retrieves the contextEngineID for the agent instance.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/get/context_engineid", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolSnmpv3GetContextEngineidResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.protocol_snmpv3_get_context_engineid_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_snmpv3_get_engineboots(self, request: operations.ProtocolSnmpv3GetEnginebootsRequest) -> operations.ProtocolSnmpv3GetEnginebootsResponse:
        r"""Retrieves the number of times the agent has been restarted.
        Retrieves the number of times the agent has been restarted.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/get/engineboots", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolSnmpv3GetEnginebootsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[int])
                res.protocol_snmpv3_get_engineboots_200_application_json_int32_integer = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_snmpv3_get_engineid(self, request: operations.ProtocolSnmpv3GetEngineidRequest) -> operations.ProtocolSnmpv3GetEngineidResponse:
        r"""For started agents, retrieves the current engineID in use by the snmpv3 module.
        For stopped agents, this operation is meaningless. If not explicitly set by the user then the autogenerated engineID is returned. The format of the engineID is in the familiar hex format, eg. \x01 23 45 67 89...
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/get/engineid", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolSnmpv3GetEngineidResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.protocol_snmpv3_get_engineid_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_snmpv3_get_enginetime(self, request: operations.ProtocolSnmpv3GetEnginetimeRequest) -> operations.ProtocolSnmpv3GetEnginetimeResponse:
        r"""Retrieves the time in seconds for which the agent has been running.
        Retrieves the time in seconds for which the agent has been running.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/get/enginetime", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolSnmpv3GetEnginetimeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[int])
                res.protocol_snmpv3_get_enginetime_200_application_json_int32_integer = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_snmpv3_group_add(self, request: operations.ProtocolSnmpv3GroupAddRequest) -> operations.ProtocolSnmpv3GroupAddResponse:
        r"""Adds a new group entry with the specified parameters.
        Adds a new group entry with the specified parameters.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/group/add/{groupName}/{securityModel}/{securityName}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolSnmpv3GroupAddResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.protocol_snmpv3_group_add_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_snmpv3_group_clear(self, request: operations.ProtocolSnmpv3GroupClearRequest) -> operations.ProtocolSnmpv3GroupClearResponse:
        r"""Clears all group entries.
        Clears all group entries.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/group/clear", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolSnmpv3GroupClearResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.protocol_snmpv3_group_clear_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_snmpv3_group_del(self, request: operations.ProtocolSnmpv3GroupDelRequest) -> operations.ProtocolSnmpv3GroupDelResponse:
        r"""Deletes the specified group entry.
        Deletes the specified group entry.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/group/del/{groupName}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolSnmpv3GroupDelResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.protocol_snmpv3_group_del_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_snmpv3_group_list(self, request: operations.ProtocolSnmpv3GroupListRequest) -> operations.ProtocolSnmpv3GroupListResponse:
        r"""Returns the current group entries as an array of strings.
        Returns the current group entries as an array of strings.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/group/list", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolSnmpv3GroupListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[str]])
                res.protocol_snmpv3_group_list_200_application_json_strings = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_snmpv3_set_config(self, request: operations.ProtocolSnmpv3SetConfigRequest) -> operations.ProtocolSnmpv3SetConfigResponse:
        r"""Changes the SNMPv3 configuration.
        Changes the SNMPv3 configuration.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/set/config/{parameter}/{value}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolSnmpv3SetConfigResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.protocol_snmpv3_set_config_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_snmpv3_user_add(self, request: operations.ProtocolSnmpv3UserAddRequest) -> operations.ProtocolSnmpv3UserAddResponse:
        r"""Adds a new user entry with the specified parameters.
        Adds a new user entry with the specified parameters.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/user/add/{userName}/{securityName}/{authProtocol}/{authKey}/{privProtocol}/{privKey}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolSnmpv3UserAddResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.protocol_snmpv3_user_add_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_snmpv3_user_clear(self, request: operations.ProtocolSnmpv3UserClearRequest) -> operations.ProtocolSnmpv3UserClearResponse:
        r"""Clears all user entries.
        Clears all user entries.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/user/clear", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolSnmpv3UserClearResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.protocol_snmpv3_user_clear_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_snmpv3_user_del(self, request: operations.ProtocolSnmpv3UserDelRequest) -> operations.ProtocolSnmpv3UserDelResponse:
        r"""Deletes the specified user entry.
        Deletes the specified user entry.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/user/del/{userName}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolSnmpv3UserDelResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.protocol_snmpv3_user_del_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_snmpv3_user_list(self, request: operations.ProtocolSnmpv3UserListRequest) -> operations.ProtocolSnmpv3UserListResponse:
        r"""Returns the current user entries as a Tcl list.
        Returns the current user entries as a Tcl list.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/user/list", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolSnmpv3UserListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[str]])
                res.protocol_snmpv3_user_list_200_application_json_strings = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_snmpv3_usm_save(self, request: operations.ProtocolSnmpv3UsmSaveRequest) -> operations.ProtocolSnmpv3UsmSaveResponse:
        r"""Saves current user settings in the currently loaded USM config file.
        Saves current user settings in the currently loaded USM config file.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/usm/save", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolSnmpv3UsmSaveResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[str]])
                res.protocol_snmpv3_usm_save_200_application_json_strings = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_snmpv3_usm_saveas(self, request: operations.ProtocolSnmpv3UsmSaveasRequest) -> operations.ProtocolSnmpv3UsmSaveasResponse:
        r"""Saves current user settings in the specified USM config file.
        Saves current user settings in the specified USM config file.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/usm/saveas/{filename}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolSnmpv3UsmSaveasResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[str]])
                res.protocol_snmpv3_usm_saveas_200_application_json_strings = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_snmpv3_vacm_save(self, request: operations.ProtocolSnmpv3VacmSaveRequest) -> operations.ProtocolSnmpv3VacmSaveResponse:
        r"""Saves current group, access, view settings in the currently loaded VACM config file.
        Saves current group, access, view settings in the currently loaded VACM config file.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/vacm/save", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolSnmpv3VacmSaveResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[str]])
                res.protocol_snmpv3_vacm_save_200_application_json_strings = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_snmpv3_vacm_saveas(self, request: operations.ProtocolSnmpv3VacmSaveasRequest) -> operations.ProtocolSnmpv3VacmSaveasResponse:
        r"""Saves current group, access, view settings in the specified VACM config file.
        Saves current group, access, view settings in the specified VACM config file.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/vacm/saveas/{filename}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolSnmpv3VacmSaveasResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[str]])
                res.protocol_snmpv3_vacm_saveas_200_application_json_strings = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_snmpv3_view_add(self, request: operations.ProtocolSnmpv3ViewAddRequest) -> operations.ProtocolSnmpv3ViewAddResponse:
        r"""Adds a new view entry with the specified parameters.
        Adds a new view entry with the specified parameters.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/view/add/{viewName}/{viewType}/{subtree}/{mask}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolSnmpv3ViewAddResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.protocol_snmpv3_view_add_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_snmpv3_view_clear(self, request: operations.ProtocolSnmpv3ViewClearRequest) -> operations.ProtocolSnmpv3ViewClearResponse:
        r"""Clears all view entries.
        Clears all view entries.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/view/clear", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolSnmpv3ViewClearResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.protocol_snmpv3_view_clear_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_snmpv3_view_del(self, request: operations.ProtocolSnmpv3ViewDelRequest) -> operations.ProtocolSnmpv3ViewDelResponse:
        r"""Deletes the specified view entry.
        Deletes the specified view entry.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/view/del/{viewName}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolSnmpv3ViewDelResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.protocol_snmpv3_view_del_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_snmpv3_view_list(self, request: operations.ProtocolSnmpv3ViewListRequest) -> operations.ProtocolSnmpv3ViewListResponse:
        r"""Returns the current view entries as an array of strings.
        Returns the current view entries as an array of strings.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/view/list", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolSnmpv3ViewListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[str]])
                res.protocol_snmpv3_view_list_200_application_json_strings = out
        elif r.status_code == 400:
            pass

        return res

    