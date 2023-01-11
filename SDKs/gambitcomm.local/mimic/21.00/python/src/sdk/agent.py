import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class Agent:
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

    
    def add_ipalias(self, request: operations.AddIpaliasRequest) -> operations.AddIpaliasResponse:
        r"""Adds a new ipalias for the agent.
        port defaults to 161 if not specified. mask defaults to the class-based network mask for the address. interface defaults to the default network interface.  If port is set to 0, the system will automatically select a port number. This is useful for client-mode protocols, such as TFTP or TOD. Upon start of an IP alias with a 0 (auto-assigned) port number, its port will change to contain the value of the selected system port.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/ipalias/add/{IP}/{port}/{mask}/{interface}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AddIpaliasResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.add_ipalias_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def add_timer_script(self, request: operations.AddTimerScriptRequest) -> operations.AddTimerScriptResponse:
        r"""Add a new timer script to be executed at specified interval (in msec) with the specified argument.
        Add a new timer script to be executed at specified interval (in msec) with the specified argument.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/timer/script/add/{script}/{interval}/{arg}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AddTimerScriptResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.add_timer_script_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def agent_remove(self, request: operations.AgentRemoveRequest) -> operations.AgentRemoveResponse:
        r"""Remove the current agent.
        For speed, this operation will complete asynchronously. The same synchronization considerations apply as in /mimic/agent/start.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/remove", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AgentRemoveResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.agent_remove_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def agent_store_copy(self, request: operations.AgentStoreCopyRequest) -> operations.AgentStoreCopyResponse:
        r"""This command copies the variable store from the other agent to this agent.
        This command copies the variable store from the other agent to this agent.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/store/copy/{otherAgent}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AgentStoreCopyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.agent_store_copy_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def agent_store_exists(self, request: operations.AgentStoreExistsRequest) -> operations.AgentStoreExistsResponse:
        r"""This command can be used as a predicate to ascertain the existence of a given variable.
        It returns \"1\" if the variable exists, else \"0\".
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/store/exists/{var}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AgentStoreExistsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.agent_store_exists_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def agent_store_get(self, request: operations.AgentStoreGetRequest) -> operations.AgentStoreGetResponse:
        r"""Fetches the value associated with a variable.
        The value will be returned as a string (like all Tcl values).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/store/get/{var}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AgentStoreGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.agent_store_get_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def agent_store_list(self, request: operations.AgentStoreListRequest) -> operations.AgentStoreListResponse:
        r"""This command will return the list of variables in the said scope.
        The list will be a Tcl format list with curly braces \"{}\" around each list element. These elements in turn are space separated.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/store/list", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AgentStoreListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[str]])
                res.agent_store_list_200_application_json_strings = out
        elif r.status_code == 400:
            pass

        return res

    
    def agent_store_lreplace(self, request: operations.AgentStoreLreplaceRequest) -> operations.AgentStoreLreplaceResponse:
        r"""These commands treat the variable as a list, and allow to replace an entry in the list at the specified index with the specified value. The variable has to already exist.
        These commands treat the variable as a list, and allow to replace an entry in the list at the specified index with the specified value. The variable has to already exist.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/store/lreplace/{var}/{index}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AgentStoreLreplaceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.agent_store_lreplace_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def agent_store_persists(self, request: operations.AgentStorePersistsRequest) -> operations.AgentStorePersistsResponse:
        r"""This command can be used as a predicate to ascertain the persistence of a given variable.
        It returns \"1\" if the variable is persistent, else \"0\".
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/store/persists/{var}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AgentStorePersistsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.agent_store_persists_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def agent_store_set(self, request: operations.AgentStoreSetRequest) -> operations.AgentStoreSetResponse:
        r"""These commands allow the creation of a new variable, or changing an existing value.
        The append sub-command will append the value to an existing variable, or create a new one. The set sub-command will overwrite an existing variable, or create a new one. The optional persist flag can be used to indicate if the variable is to be persistent as described above. By default a value of '0' will be implied for the persist flag. To avoid mistakes, for existing variables the persist flag can only be set. If you want to reset it, you first need to unset the variable.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/store/set/{var}/{persist}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AgentStoreSetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.agent_store_set_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def agent_store_unset(self, request: operations.AgentStoreUnsetRequest) -> operations.AgentStoreUnsetResponse:
        r"""Deletes a variable which is currently defined.
        This will cleanup persistent variables if needed
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/store/unset/{var}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AgentStoreUnsetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.agent_store_unset_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def del_ipalias(self, request: operations.DelIpaliasRequest) -> operations.DelIpaliasResponse:
        r"""Deletes an existing ipalias from the agent.
        port defaults to 161 if not specified.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/ipalias/delete/{IP}/{port}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DelIpaliasResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.del_ipalias_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def del_timer_script(self, request: operations.DelTimerScriptRequest) -> operations.DelTimerScriptResponse:
        r"""Remove a timer script from the execution list.
        The first scheduled script that matches the script name, and optionally the interval and argument will be deleted.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/timer/script/delete/{script}/{interval}/{arg}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DelTimerScriptResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.del_timer_script_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def from_add(self, request: operations.FromAddRequest) -> operations.FromAddResponse:
        r"""Add a source address that the agent will accept messages from.
        An empty ipaddress or 0.0.0.0 both imply any address. Similarly an empty port or 0 both imply any port. For agents with source-address-indexing enabled, messages which do not match any source address will be discarded with an ERROR message, similar to community string mismatches.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/from/add/{IP}/{port}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FromAddResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.from_add_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def from_del(self, request: operations.FromDelRequest) -> operations.FromDelResponse:
        r"""delete a source address that the agent will accept messages from.
        An empty ipaddress or 0.0.0.0 both imply any address. Similarly an empty port or 0 both imply any port. For agents with source-address-indexing enabled, messages which do not match any source address will be discarded with an ERROR message, similar to community string mismatches.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/from/delete/{IP}/{port}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FromDelResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.from_del_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def from_list(self, request: operations.FromListRequest) -> operations.FromListResponse:
        r"""List the source addresses that the agent will accept messages from.
        This in effect implements source-address-indexing, where 2 agents with the same address can be configured, each accepting messages from different management stations.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/from/list", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FromListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.IPSource]])
                res.ip_sources = out
        elif r.status_code == 400:
            pass

        return res

    
    def get_agent_state(self, request: operations.GetAgentStateRequest) -> operations.GetAgentStateResponse:
        r"""current running state of the agent
        0-Unknown 1-Running 2-Stopped 3-Halted 4-Paused 5-Deleted 6-Stopping
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/get/state", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAgentStateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[int])
                res.get_agent_state_200_application_json_int32_integer = out
        elif r.status_code == 400:
            pass

        return res

    
    def get_changed(self, request: operations.GetChangedRequest) -> operations.GetChangedResponse:
        r"""has the agent value space changed?
        has the agent value space changed?
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/get/changed", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetChangedResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[int])
                res.get_changed_200_application_json_int32_integer = out
        elif r.status_code == 400:
            pass

        return res

    
    def get_config_changed(self, request: operations.GetConfigChangedRequest) -> operations.GetConfigChangedResponse:
        r"""has the lab configuration changed?
        has the lab configuration changed?
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/get/config_changed", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetConfigChangedResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[int])
                res.get_config_changed_200_application_json_int32_integer = out
        elif r.status_code == 400:
            pass

        return res

    
    def get_delay(self, request: operations.GetDelayRequest) -> operations.GetDelayResponse:
        r"""one-way transit delay in msec.
        The minimum granularity is 10 msec.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/get/delay", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDelayResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[int])
                res.get_delay_200_application_json_int32_integer = out
        elif r.status_code == 400:
            pass

        return res

    
    def get_drops(self, request: operations.GetDropsRequest) -> operations.GetDropsResponse:
        r"""drop rate (every N-th PDU). 0 means no drops.
        drop rate (every N-th PDU). 0 means no drops.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/get/drops", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDropsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[int])
                res.get_drops_200_application_json_int32_integer = out
        elif r.status_code == 400:
            pass

        return res

    
    def get_host(self, request: operations.GetHostRequest) -> operations.GetHostResponse:
        r"""host address of the agent.
        Currently, only IPv4 addresses are allowed as the main address of the agent, but both IPv4 and IPv6 addresses are allowed as IP aliases for the agent.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/get/host", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetHostResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.get_host_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def get_inform_timeout(self, request: operations.GetInformTimeoutRequest) -> operations.GetInformTimeoutResponse:
        r"""timeout in seconds for retransmitting INFORM PDUs.
        The agent will retransmit INFORM PDUs at this interval until it has received a reply from the manager.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/get/inform_timeout", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetInformTimeoutResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[int])
                res.get_inform_timeout_200_application_json_int32_integer = out
        elif r.status_code == 400:
            pass

        return res

    
    def get_interface(self, request: operations.GetInterfaceRequest) -> operations.GetInterfaceResponse:
        r"""network interface card for the agent.
        network interface card for the agent.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/get/interface", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetInterfaceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.get_interface_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def get_mask(self, request: operations.GetMaskRequest) -> operations.GetMaskResponse:
        r"""subnet mask of the agent.
        subnet mask of the agent.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/get/mask", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMaskResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.get_mask_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def get_mibs(self, request: operations.GetMibsRequest) -> operations.GetMibsResponse:
        r"""set of MIBs, simulations and scenarios
        set of MIBs, simulations and scenarios
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/get/mibs", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMibsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.Triplet]])
                res.triplets = out
        elif r.status_code == 400:
            pass

        return res

    
    def get_number_starts(self, request: operations.GetNumberStartsRequest) -> operations.GetNumberStartsResponse:
        r"""number of starts for the agent.
        This count is incremented each time an agent starts. It affects the SNMPv3 EngineBoots parameter.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/get/num_starts", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNumberStartsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[int])
                res.get_number_starts_200_application_json_int32_integer = out
        elif r.status_code == 400:
            pass

        return res

    
    def get_oiddir(self, request: operations.GetOiddirRequest) -> operations.GetOiddirResponse:
        r"""MIB directory of the agent.
        MIB directory of the agent.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/get/oiddir", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOiddirResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.get_oiddir_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def get_owner(self, request: operations.GetOwnerRequest) -> operations.GetOwnerResponse:
        r"""owner of the agent.
        owner of the agent.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/get/owner", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOwnerResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.get_owner_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def get_pdusize(self, request: operations.GetPdusizeRequest) -> operations.GetPdusizeResponse:
        r"""maximum PDU size.
        The limit for this configurable is 65536.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/get/pdusize", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPdusizeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[int])
                res.get_pdusize_200_application_json_int32_integer = out
        elif r.status_code == 400:
            pass

        return res

    
    def get_port(self, request: operations.GetPortRequest) -> operations.GetPortResponse:
        r"""port number
        port number
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/get/port", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPortResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.get_port_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def get_privdir(self, request: operations.GetPrivdirRequest) -> operations.GetPrivdirResponse:
        r"""private directory of the agent.
        private directory of the agent.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/get/privdir", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPrivdirResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.get_privdir_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def get_protocols(self, request: operations.GetProtocolsRequest) -> operations.GetProtocolsResponse:
        r"""protocols supported by agent
        protocols supported by agent as an array of strings
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/get/protocol", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetProtocolsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[str]])
                res.get_protocols_200_application_json_strings = out
        elif r.status_code == 400:
            pass

        return res

    
    def get_read_community(self, request: operations.GetReadCommunityRequest) -> operations.GetReadCommunityResponse:
        r"""read community string
        read community string
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/get/read", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetReadCommunityResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.get_read_community_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def get_scen(self, request: operations.GetScenRequest) -> operations.GetScenResponse:
        r"""first scenario name
        first scenario name
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/get/scen", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetScenResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[int])
                res.get_scen_200_application_json_int32_integer = out
        elif r.status_code == 400:
            pass

        return res

    
    def get_sim(self, request: operations.GetSimRequest) -> operations.GetSimResponse:
        r"""first simulation name
        first simulation name
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/get/sim", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSimResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.get_sim_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def get_starttime(self, request: operations.GetStarttimeRequest) -> operations.GetStarttimeResponse:
        r"""relative start time
        relative start time
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/get/start", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetStarttimeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.get_starttime_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def get_state_changed(self, request: operations.GetStateChangedRequest) -> operations.GetStateChangedResponse:
        r"""has the agent state changed?
        has the agent state changed?
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/get/state_changed", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetStateChangedResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[int])
                res.get_state_changed_200_application_json_int32_integer = out
        elif r.status_code == 400:
            pass

        return res

    
    def get_statistics(self, request: operations.GetStatisticsRequest) -> operations.GetStatisticsResponse:
        r"""current statistics of the agent instance
        The statistics are returned as 64-bit decimal numbers for the following statistics, total, discarded, error, GET, GETNEXT, SET, GETBULK, trap, GET variables, GETNEXT variables, SET variables, GETBULK variables, INFORM sent, INFORM re-sent, INFORM timed out, INFORM acked, INFORM REPORT
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/get/statistics", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetStatisticsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[int]])
                res.get_statistics_200_application_json_int32_integers = out
        elif r.status_code == 400:
            pass

        return res

    
    def get_trace(self, request: operations.GetTraceRequest) -> operations.GetTraceResponse:
        r"""SNMP PDU tracing
        SNMP PDU tracing
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/get/trace", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTraceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[int])
                res.get_trace_200_application_json_int32_integer = out
        elif r.status_code == 400:
            pass

        return res

    
    def get_validate(self, request: operations.GetValidateRequest) -> operations.GetValidateResponse:
        r"""SNMP SET validation policy.
        Is a bitmask in which with the following bits (from LSB) check for type, length, range, access
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/get/validate", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetValidateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[int])
                res.get_validate_200_application_json_int32_integer = out
        elif r.status_code == 400:
            pass

        return res

    
    def get_write_community(self, request: operations.GetWriteCommunityRequest) -> operations.GetWriteCommunityResponse:
        r"""write community string
        write community string
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/get/write", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetWriteCommunityResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.get_write_community_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def halt(self, request: operations.HaltRequest) -> operations.HaltResponse:
        r"""Halt the current agent.
        Halt the current agent.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/halt", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.HaltResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.halt_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def list_ipaliases(self, request: operations.ListIpaliasesRequest) -> operations.ListIpaliasesResponse:
        r"""Lists all the additional ipaliases configured for the agent.
        The agent host address (set with mimic agent set host) is not in this list, since it is already accessible separately with mimic agent get host.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/ipalias/list", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ListIpaliasesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.IPAlias]])
                res.ip_aliases = out
        elif r.status_code == 400:
            pass

        return res

    
    def list_timer_scripts(self, request: operations.ListTimerScriptsRequest) -> operations.ListTimerScriptsResponse:
        r"""List the timer scripts currently running along with the their intervals.
        The command mimic timer script list lists global timer scripts, the command /mimic/timer/script/{agentNum}/list is the per-agent equivalent NOTE Global timer scripts run globally but within them you can address individual agents using {agentNum}. To schedule timerscripts for an individual agent, use /mimic/timer/script/{agentNum}.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/timer/script/list", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ListTimerScriptsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.TimerScript]])
                res.timer_scripts = out
        elif r.status_code == 400:
            pass

        return res

    
    def new(self, request: operations.NewRequest) -> operations.NewResponse:
        r"""Add an agent.
        Add an agent.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/add/{IP}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.NewResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.new_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def pause_now(self, request: operations.PauseNowRequest) -> operations.PauseNowResponse:
        r"""Pause the current agent.
        Pause the current agent.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/pause", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PauseNowResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.pause_now_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_get_config(self, request: operations.ProtocolGetConfigRequest) -> operations.ProtocolGetConfigResponse:
        r"""Returns the protocol's configuration.
        Returns the protocol's configuration.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/{prot}/get/config", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolGetConfigResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.protocol_get_config_200_application_json_object = out
        elif r.status_code == 400:
            pass

        return res

    
    def reload(self, request: operations.ReloadRequest) -> operations.ReloadResponse:
        r"""Reload the current agent.
        This only works for halted agents. The net effect is the same as restarting an agent (ie. stop, start, halt), but without disconnecting the network (and thus existing connections).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/reload", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ReloadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.reload_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def resume(self, request: operations.ResumeRequest) -> operations.ResumeResponse:
        r"""Resume the current agent.
        Resume the current agent.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/resume", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ResumeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.resume_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def save(self, request: operations.SaveRequest) -> operations.SaveResponse:
        r"""Save agent MIB values.
        Save agent MIB values.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/save", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SaveResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.save_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def set_delay(self, request: operations.SetDelayRequest) -> operations.SetDelayResponse:
        r"""one-way transit delay in msec
        The minimum granularity is 10 msec.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/set/delay/{delay}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SetDelayResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[int])
                res.set_delay_200_application_json_int32_integer = out
        elif r.status_code == 400:
            pass

        return res

    
    def set_drops(self, request: operations.SetDropsRequest) -> operations.SetDropsResponse:
        r"""drop rate (every N-th PDU)
        0 means no drops
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/set/drops/{drops}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SetDropsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[int])
                res.set_drops_200_application_json_int32_integer = out
        elif r.status_code == 400:
            pass

        return res

    
    def set_host(self, request: operations.SetHostRequest) -> operations.SetHostResponse:
        r"""host address of the agent.
        Currently, only IPv4 addresses are allowed as the main address of the agent, but both IPv4 and IPv6 addresses are allowed as IP aliases for the agent.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/set/host/{host}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SetHostResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.set_host_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def set_inform_timeout(self, request: operations.SetInformTimeoutRequest) -> operations.SetInformTimeoutResponse:
        r"""timeout in seconds for retransmitting INFORM PDUs
        The agent will retransmit INFORM PDUs at this interval until it has received a reply from the manager.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/set/inform_timeout/{inform_timeout}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SetInformTimeoutResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[int])
                res.set_inform_timeout_200_application_json_int32_integer = out
        elif r.status_code == 400:
            pass

        return res

    
    def set_interface(self, request: operations.SetInterfaceRequest) -> operations.SetInterfaceResponse:
        r"""network interface card for the agent
        network interface card for the agent
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/set/interface/{interface}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SetInterfaceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.set_interface_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def set_mask(self, request: operations.SetMaskRequest) -> operations.SetMaskResponse:
        r"""subnet mask of the agent.
        subnet mask of the agent.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/set/mask/{mask}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SetMaskResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.set_mask_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def set_mibs(self, request: operations.SetMibsRequest) -> operations.SetMibsResponse:
        r"""set of MIBs, simulations and scenarios
        set of MIBs, simulations and scenarios
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/set/mibs", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SetMibsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.set_mibs_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def set_oiddir(self, request: operations.SetOiddirRequest) -> operations.SetOiddirResponse:
        r"""MIB directory of the agent.
        MIB directory of the agent.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/set/oiddir/{oiddir}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SetOiddirResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.set_oiddir_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def set_owner(self, request: operations.SetOwnerRequest) -> operations.SetOwnerResponse:
        r"""owner of the agent
        owner of the agent
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/set/owner/{owner}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SetOwnerResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.set_owner_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def set_pdusize(self, request: operations.SetPdusizeRequest) -> operations.SetPdusizeResponse:
        r"""maximum PDU size
        The limit for this configurable is 65536
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/set/pdusize/{pdusize}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SetPdusizeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[int])
                res.set_pdusize_200_application_json_int32_integer = out
        elif r.status_code == 400:
            pass

        return res

    
    def set_port(self, request: operations.SetPortRequest) -> operations.SetPortResponse:
        r"""port number
        port number
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/set/port/{port}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SetPortResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.set_port_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def set_privdir(self, request: operations.SetPrivdirRequest) -> operations.SetPrivdirResponse:
        r"""private directory of the agent.
        private directory of the agent.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/set/privdir/{privdir}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SetPrivdirResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.set_privdir_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def set_protocols(self, request: operations.SetProtocolsRequest) -> operations.SetProtocolsResponse:
        r"""protocols supported by agent as a comma-separated list
        protocols supported by agent as a comma-separated list
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/set/protocol", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SetProtocolsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[int]])
                res.set_protocols_200_application_json_string_integers = out
        elif r.status_code == 400:
            pass

        return res

    
    def set_read_community(self, request: operations.SetReadCommunityRequest) -> operations.SetReadCommunityResponse:
        r"""read community string
        read community string
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/set/read/{read}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SetReadCommunityResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.set_read_community_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def set_starttime(self, request: operations.SetStarttimeRequest) -> operations.SetStarttimeResponse:
        r"""relative start time
        relative start time
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/set/start/{start}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SetStarttimeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.set_starttime_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def set_trace(self, request: operations.SetTraceRequest) -> operations.SetTraceResponse:
        r"""SNMP PDU tracing
        SNMP PDU tracing
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/set/trace/{trace}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SetTraceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[int])
                res.set_trace_200_application_json_int32_integer = out
        elif r.status_code == 400:
            pass

        return res

    
    def set_validate(self, request: operations.SetValidateRequest) -> operations.SetValidateResponse:
        r"""SNMP SET validation policy
        Is a bitmask in which with the following bits (from LSB) check for type, length, range, access. A default value of 65535 does all validation checking.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/set/validate/{validate}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SetValidateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[int])
                res.set_validate_200_application_json_int32_integer = out
        elif r.status_code == 400:
            pass

        return res

    
    def set_write_community(self, request: operations.SetWriteCommunityRequest) -> operations.SetWriteCommunityResponse:
        r"""write community string
        write community string
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/set/write/{write}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SetWriteCommunityResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.set_write_community_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def start(self, request: operations.StartRequest) -> operations.StartResponse:
        r"""Start the current agent.
        For speed, this operation will complete asynchronously. A successful return from this command means the starting of the agent is in progress. If you need to rely on the agent to have completed startup, you should wait for it's state to become RUNNING.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/start", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.StartResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.start_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def start_ipalias(self, request: operations.StartIpaliasRequest) -> operations.StartIpaliasResponse:
        r"""Starts an existing ipalias for the agent.
        port defaults to 161 if not specified.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/ipalias/start/{IP}/{port}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.StartIpaliasResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.start_ipalias_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def status_ipalias(self, request: operations.StatusIpaliasRequest) -> operations.StatusIpaliasResponse:
        r"""Returns the status (0=down, 1=up) of an existing ipalias for the agent.
        port defaults to 161 if not specified.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/ipalias/status/{IP}/{port}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.StatusIpaliasResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.status_ipalias_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def stop(self, request: operations.StopRequest) -> operations.StopResponse:
        r"""Show the agent's primary IP address
        Agent primary IP address
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/stop", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.StopResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.stop_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def stop_ipalias(self, request: operations.StopIpaliasRequest) -> operations.StopIpaliasResponse:
        r"""Stops an existing ipalias for the agent.
        port defaults to 161 if not specified.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/ipalias/stop/{IP}/{port}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.StopIpaliasResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.stop_ipalias_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def trap_config_add(self, request: operations.TrapConfigAddRequest) -> operations.TrapConfigAddResponse:
        r"""Add a trap destination to the set of destinations.
        Add a trap destination to the set of destinations.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/trap/config/add/{IP}/{port}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.TrapConfigAddResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.trap_config_add_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def trap_config_del(self, request: operations.TrapConfigDelRequest) -> operations.TrapConfigDelResponse:
        r"""Remove a trap destination from the set of destinations.
        Remove a trap destination from the set of destinations.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/trap/config/delete/{IP}/{port}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.TrapConfigDelResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.trap_config_del_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def trap_config_list(self, request: operations.TrapConfigListRequest) -> operations.TrapConfigListResponse:
        r"""List the set of trap destinations for this agent instance.
        Each trap destination is identified with an IP address and a port number. The default port number is the standard SNMP trap port 162.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/trap/config/list", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.TrapConfigListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.TrapDest]])
                res.trap_dests = out
        elif r.status_code == 400:
            pass

        return res

    
    def trap_list(self, request: operations.TrapListRequest) -> operations.TrapListResponse:
        r"""List the outstanding asynchronous traps for this agent instance.
        List the outstanding asynchronous traps for this agent instance.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/trap/list", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.TrapListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[str]])
                res.trap_list_200_application_json_strings = out

        return res

    