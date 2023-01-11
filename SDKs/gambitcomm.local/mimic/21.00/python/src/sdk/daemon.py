import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class Daemon:
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

    
    def add_daemon_timer_script(self, request: operations.AddDaemonTimerScriptRequest) -> operations.AddDaemonTimerScriptResponse:
        r"""Add a new timer script to be executed at specified interval (in msec) with the specified argument.
        Add a new timer script to be executed at specified interval (in msec) with the specified argument.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/timer/script/add/{script}/{interval}/{arg}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AddDaemonTimerScriptResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.add_daemon_timer_script_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def cfg_load(self, request: operations.CfgLoadRequest) -> operations.CfgLoadResponse:
        r"""Load the lab configuration file file.
        Load agents in cfgFile from firstAgentNum to lastAgentNum on startAgentNum of current configuration
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/load/{cfgFile}/{firstAgentNum}/{lastAgentNum}/{startAgentNum}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CfgLoadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, int]])
                res.cfg_load_200_application_json_object = out

        return res

    
    def cfg_new(self, request: operations.CfgNewRequest) -> operations.CfgNewResponse:
        r"""Clear the lab configuration.
        Clear the lab configuration.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/clear/{firstAgentNum}/{lastAgentNum}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CfgNewResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, int]])
                res.cfg_new_200_application_json_object = out

        return res

    
    def cfg_save(self) -> operations.CfgSaveResponse:
        r"""Save the lab configuration.
        Save the lab configuration.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/mimic/save"
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CfgSaveResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, int]])
                res.cfg_save_200_application_json_object = out

        return res

    
    def cfg_saveas(self, request: operations.CfgSaveasRequest) -> operations.CfgSaveasResponse:
        r"""Save the lab configuration in file.
        Save the lab configuration in file.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/saveas/{cfgFile}/{firstAgentNum}/{lastAgentNum}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CfgSaveasResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, int]])
                res.cfg_saveas_200_application_json_object = out

        return res

    
    def del_daemon_timer_script(self, request: operations.DelDaemonTimerScriptRequest) -> operations.DelDaemonTimerScriptResponse:
        r"""Remove a timer script from the execution list.
        The first scheduled script that matches the script name, and optionally the interval and argument will be deleted.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/timer/script/delete/{script}/{interval}/{arg}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DelDaemonTimerScriptResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.del_daemon_timer_script_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def get_active_data_list(self) -> operations.GetActiveDataListResponse:
        r"""The list of {agentnum {statistics}} for agents that are currently active and whose statistics have changed since the last invocation of this command.
        This list is guaranteed to be sorted into increasing order.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/mimic/get/active_data_list"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetActiveDataListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[int]])
                res.get_active_data_list_200_application_json_int32_integers = out

        return res

    
    def get_active_list(self) -> operations.GetActiveListResponse:
        r"""The list of {agentnum} that are currently active (running or paused).
        This list is guaranteed to be sorted into increasing order.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/mimic/get/active_list"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetActiveListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[int]])
                res.get_active_list_200_application_json_int32_integers = out

        return res

    
    def get_cfg_file_changed(self) -> operations.GetCfgFileChangedResponse:
        r"""This predicate indicates if the currently loaded agent configuration file has changed.
        Whether the loaded agent configuration file has changed since the last time this predicate was queried. This allows for a client to detect agent configuration changes and to synchronize those changes from the MIMIC daemon.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/mimic/get/cfgfile_changed"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCfgFileChangedResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, int]])
                res.get_cfg_file_changed_200_application_json_object = out

        return res

    
    def get_cfgfile(self) -> operations.GetCfgfileResponse:
        r"""The currently loaded lab configuration file for the particular user.
        In the case of multi-user access this command returns a different configuration file loaded for each user.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/mimic/get/cfgfile"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCfgfileResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, int]])
                res.get_cfgfile_200_application_json_object = out

        return res

    
    def get_changed_config_list(self) -> operations.GetChangedConfigListResponse:
        r"""The list of {agentnum} for which a configurable parameter changed.
        This list contains at most 5000 agent(s), and is guaranteed to be sorted into increasing order.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/mimic/get/changed_config_list"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetChangedConfigListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[int]])
                res.get_changed_config_list_200_application_json_int32_integers = out

        return res

    
    def get_changed_state_list(self) -> operations.GetChangedStateListResponse:
        r"""The list of {agentnum state} for which the state changed.
        This list contains at most 5000 agent(s), and is guaranteed to be sorted into increasing order.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/mimic/get/changed_state_list"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetChangedStateListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.AgentState]])
                res.agent_states = out

        return res

    
    def get_clients(self) -> operations.GetClientsResponse:
        r"""The number of clients currently connected to the daemon.
        The number of clients currently connected to the daemon.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/mimic/get/clients"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetClientsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, int]])
                res.get_clients_200_application_json_object = out

        return res

    
    def get_configured_list(self) -> operations.GetConfiguredListResponse:
        r"""The list of {agentnum} that are currently configured.
        This list is guaranteed to be sorted into increasing order.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/mimic/get/configured_list"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetConfiguredListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[int]])
                res.get_configured_list_200_application_json_int32_integers = out

        return res

    
    def get_daemon_protocols(self) -> operations.GetDaemonProtocolsResponse:
        r"""The set of protocols supported by the Simulator.
        The set of protocols supported by the Simulator.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/mimic/get/protocols"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDaemonProtocolsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, int]])
                res.get_daemon_protocols_200_application_json_object = out

        return res

    
    def get_interfaces(self) -> operations.GetInterfacesResponse:
        r"""The set of network interfaces that can be used for simulations.
        The set of network interfaces that can be used for simulations.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/mimic/get/interfaces"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetInterfacesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, int]])
                res.get_interfaces_200_application_json_object = out

        return res

    
    def get_last(self) -> operations.GetLastResponse:
        r"""The last configured agent instance.
        The last configured agent instance.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/mimic/get/last"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetLastResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[int])
                res.get_last_200_application_json_int32_integer = out

        return res

    
    def get_log(self) -> operations.GetLogResponse:
        r"""The current log file for the Simulator.
        The current log file for the Simulator.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/mimic/get/log"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetLogResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, int]])
                res.get_log_200_application_json_object = out

        return res

    
    def get_max(self) -> operations.GetMaxResponse:
        r"""The maximum number of agent instances.
        The maximum number of agent instances.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/mimic/get/max"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMaxResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[int])
                res.get_max_200_application_json_int32_integer = out

        return res

    
    def get_netaddr(self) -> operations.GetNetaddrResponse:
        r"""The network address of the host where the MIMIC simulator is running.
        The network address of the host where the MIMIC simulator is running.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/mimic/get/netaddr"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetaddrResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, int]])
                res.get_netaddr_200_application_json_object = out

        return res

    
    def get_netdev(self) -> operations.GetNetdevResponse:
        r"""The default network device to be used for agent addresses.
        The default network device to be used for agent addresses if the interface is not explicitly specified for an agent.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/mimic/get/netdev"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetdevResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, int]])
                res.get_netdev_200_application_json_object = out

        return res

    
    def get_product(self) -> operations.GetProductResponse:
        r"""The product number that is licensed.
        The product number that is licensed.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/mimic/get/product"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetProductResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, int]])
                res.get_product_200_application_json_object = out

        return res

    
    def get_return(self) -> operations.GetReturnResponse:
        r"""The return mode.
        The OpenAPI daemon operates in two modes, nocatch, where error returns from MIMIC operations return error; or catch, where the TCL catch semantics are used (these are similar to C++ exceptions)
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/mimic/get/return"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetReturnResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, int]])
                res.get_return_200_application_json_object = out

        return res

    
    def get_version(self) -> operations.GetVersionResponse:
        r"""The version of the MIMIC command interface.
        The version of the MIMIC command interface.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/mimic/get/version"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetVersionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.get_version_200_application_json_string = r.content

        return res

    
    def list_daemon_timer_scripts(self) -> operations.ListDaemonTimerScriptsResponse:
        r"""List the timer scripts currently running along with the their intervals.
        The command mimic timer script list lists global timer scripts, the command /mimic/timer/script/{agentNum}/list is the per-agent equivalent NOTE Global timer scripts run globally but within them you can address individual agents using {agentNum}. To schedule timerscripts for an individual agent, use /mimic/timer/script/{agentNum}.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/mimic/timer/script/list"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ListDaemonTimerScriptsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.TimerScript]])
                res.timer_scripts = out
        elif r.status_code == 400:
            pass

        return res

    
    def mget_info(self, request: operations.MgetInfoRequest) -> operations.MgetInfoResponse:
        r"""Get multiple sets of information about MIMIC, where infoArray is one of the parameters defined in the mimic get command.
        Get multiple sets of information about MIMIC, where infoArray is one of the parameters defined in the mimic get command.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/mget/{infoArray}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.MgetInfoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[dict[str, Any]]])
                res.mget_info_200_application_json_objects = out
        elif r.status_code == 400:
            pass

        return res

    
    def set_log(self, request: operations.SetLogRequest) -> operations.SetLogResponse:
        r"""The current log file for the Simulator.
        The current log file for the Simulator.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/mimic/set/log"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SetLogResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.set_log_200_application_json_string = r.content

        return res

    
    def set_netdev(self) -> operations.SetNetdevResponse:
        r"""The network address of the host where the MIMIC simulator is running.
        The network address of the host where the MIMIC simulator is running.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/mimic/set/netdev"
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SetNetdevResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, int]])
                res.set_netdev_200_application_json_object = out

        return res

    
    def start_all_agents(self) -> operations.StartAllAgentsResponse:
        r"""Start MIMIC.
        Start MIMIC.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/mimic/start"
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.StartAllAgentsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, int]])
                res.start_all_agents_200_application_json_object = out

        return res

    
    def stop_all_agents(self) -> operations.StopAllAgentsResponse:
        r"""Stop MIMIC.
        Stop MIMIC.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/mimic/stop"
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.StopAllAgentsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, int]])
                res.stop_all_agents_200_application_json_object = out

        return res

    
    def store_exists(self, request: operations.StoreExistsRequest) -> operations.StoreExistsResponse:
        r"""This command can be used as a predicate to ascertain the existence of a given variable.
        It returns \"1\" if the variable exists, else \"0\".
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/store/exists/{var}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.StoreExistsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.store_exists_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def store_get(self, request: operations.StoreGetRequest) -> operations.StoreGetResponse:
        r"""Fetches the value associated with a variable.
        The value will be returned as a string (like all Tcl values).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/store/get/{var}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.StoreGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.store_get_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def store_list(self) -> operations.StoreListResponse:
        r"""This command will return the list of variables in the said scope.
        The list will be a Tcl format list with curly braces \"{}\" around each list element. These elements in turn are space separated.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/mimic/store/list"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.StoreListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[str]])
                res.store_list_200_application_json_strings = out
        elif r.status_code == 400:
            pass

        return res

    
    def store_lreplace(self, request: operations.StoreLreplaceRequest) -> operations.StoreLreplaceResponse:
        r"""These commands treat the variable as a list, and allow to replace an entry in the list at the specified index with the specified value. The variable has to already exist.
        These commands treat the variable as a list, and allow to replace an entry in the list at the specified index with the specified value. The variable has to already exist.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/store/lreplace/{var}/{index}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.StoreLreplaceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.store_lreplace_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def store_persists(self, request: operations.StorePersistsRequest) -> operations.StorePersistsResponse:
        r"""This command can be used as a predicate to ascertain the persistence of a given variable.
        It returns \"1\" if the variable is persistent, else \"0\".
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/store/persists/{var}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.StorePersistsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.store_persists_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def store_save(self) -> operations.StoreSaveResponse:
        r"""This operation flushes all global objects which need to be made persistent to disk.
        The MIMIC daemon caches persistent objects and their changes, and writes them to disk at program termination. If it were to crash, these changes would be lost. This operation allows to checkpoint the cache, ie. write changes to persistent objects to disk. To save the lab configuration with per-agent persistent information the mimic save operation needs to be used.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/mimic/set/persistent"
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.StoreSaveResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, int]])
                res.store_save_200_application_json_object = out

        return res

    
    def store_set(self, request: operations.StoreSetRequest) -> operations.StoreSetResponse:
        r"""Set the variable store for the global storage
        Persist 1 means persistent , 0 means non-persistent
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/store/set/{var}/{persist}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.StoreSetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.store_set_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def store_unset(self, request: operations.StoreUnsetRequest) -> operations.StoreUnsetResponse:
        r"""Deletes a variable which is currently defined.
        This will cleanup persistent variables if needed
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/store/unset/{var}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.StoreUnsetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.store_unset_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def terminate(self) -> operations.TerminateResponse:
        r"""Terminate the MIMIC daemon.
        Terminate the MIMIC daemon.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/mimic/terminate"
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.TerminateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, int]])
                res.terminate_200_application_json_object = out

        return res

    