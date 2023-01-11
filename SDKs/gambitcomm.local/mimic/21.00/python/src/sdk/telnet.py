import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class Telnet:
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

    
    def protocol_telnet_connection_logon(self, request: operations.ProtocolTelnetConnectionLogonRequest) -> operations.ProtocolTelnetConnectionLogonResponse:
        r"""Changes the connection's current logon.
        Logon change allows (hidden) commands for a different access mode to run.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/telnet/connection/logon/{connectionID}/{user}/{password}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolTelnetConnectionLogonResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[str]])
                res.protocol_telnet_connection_logon_200_application_json_strings = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_telnet_connection_request(self, request: operations.ProtocolTelnetConnectionRequestRequest) -> operations.ProtocolTelnetConnectionRequestResponse:
        r"""Executes the command asynchronously .
        Equivalent of the command typed in by the user.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/telnet/connection/request/{connectionID}/{command}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolTelnetConnectionRequestResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[str]])
                res.protocol_telnet_connection_request_200_application_json_strings = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_telnet_connection_signal(self, request: operations.ProtocolTelnetConnectionSignalRequest) -> operations.ProtocolTelnetConnectionSignalResponse:
        r"""Triggers the asynchronous signal event with the specified signal name
        Signal name is either connect or idle
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/telnet/connection/signal/{connectionID}/{signalName}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolTelnetConnectionSignalResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[str]])
                res.protocol_telnet_connection_signal_200_application_json_strings = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_telnet_get_args(self, request: operations.ProtocolTelnetGetArgsRequest) -> operations.ProtocolTelnetGetArgsResponse:
        r"""Show the agent's TELNET argument structure
        Agent's TELNET configuration with port,rule,prompt,paging_prompt,userdb,keymap
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/telnet/get/args", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolTelnetGetArgsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.protocol_telnet_get_args_200_application_json_object = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_telnet_get_config(self, request: operations.ProtocolTelnetGetConfigRequest) -> operations.ProtocolTelnetGetConfigResponse:
        r"""Show the agent's TELNET configuration
        Agent's TELNET configuration with port,rule,prompt,paging_prompt,userdb,keymap
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/telnet/get/config", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolTelnetGetConfigResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConfigTelnet])
                res.config_telnet = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_telnet_get_statistics(self, request: operations.ProtocolTelnetGetStatisticsRequest) -> operations.ProtocolTelnetGetStatisticsResponse:
        r"""Show the agent's TELNET statistics
        Statistics of fields indicated in the headers
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/telnet/get/statistics", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolTelnetGetStatisticsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[int]])
                res.protocol_telnet_get_statistics_200_application_json_int32_integers = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_telnet_get_stats_hdr(self) -> operations.ProtocolTelnetGetStatsHdrResponse:
        r"""Show the TELNET statistics headers
        The headers of statistics fields
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/mimic/protocol/msg/telnet/get/stats_hdr"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolTelnetGetStatsHdrResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[str]])
                res.protocol_telnet_get_stats_hdr_200_application_json_strings = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_telnet_get_trace(self, request: operations.ProtocolTelnetGetTraceRequest) -> operations.ProtocolTelnetGetTraceResponse:
        r"""Show the agent's TELNET traffic tracing
        Trace 1 means enabled, 0 means not
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/telnet/get/trace", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolTelnetGetTraceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConfigTelnet])
                res.config_telnet = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_telnet_ipalias_disable(self, request: operations.ProtocolTelnetIpaliasDisableRequest) -> operations.ProtocolTelnetIpaliasDisableResponse:
        r"""Disable individual IP aliases on the agent and the simulator host
        By default, the MIMIC TELNET server listens on all the IP addresses (aliases) that are configured for an agent
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/telnet/ipalias/disable/{ipaddress}/{port}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolTelnetIpaliasDisableResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.protocol_telnet_ipalias_disable_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_telnet_ipalias_enable(self, request: operations.ProtocolTelnetIpaliasEnableRequest) -> operations.ProtocolTelnetIpaliasEnableResponse:
        r"""Enable individual IP aliases on the agent and the simulator host
        By default, the MIMIC TELNET server listens on all the IP addresses (aliases) that are configured for an agent
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/telnet/ipalias/enable/{ipaddress}/{port}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolTelnetIpaliasEnableResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.protocol_telnet_ipalias_enable_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_telnet_ipalias_isenabled(self, request: operations.ProtocolTelnetIpaliasIsenabledRequest) -> operations.ProtocolTelnetIpaliasIsenabledResponse:
        r"""Check individual IP aliases on the agent and the simulator host
        By default, the MIMIC TELNET server listens on all the IP addresses (aliases) that are configured for an agent
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/telnet/ipalias/isenabled/{ipaddress}/{port}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolTelnetIpaliasIsenabledResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.protocol_telnet_ipalias_isenabled_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_telnet_ipalias_list(self, request: operations.ProtocolTelnetIpaliasListRequest) -> operations.ProtocolTelnetIpaliasListResponse:
        r"""List all IP aliases on the agent and the simulator host
        By default, the MIMIC TELNET server listens on all the IP addresses (aliases) that are configured for an agent
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/telnet/ipalias/list", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolTelnetIpaliasListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.IPAlias]])
                res.ip_aliases = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_telnet_server_get_connections(self, request: operations.ProtocolTelnetServerGetConnectionsRequest) -> operations.ProtocolTelnetServerGetConnectionsResponse:
        r"""Show the agent's TELNET connections
        IDs of all connected connections
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/telnet/server/get/connections", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolTelnetServerGetConnectionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[int]])
                res.protocol_telnet_server_get_connections_200_application_json_int32_integers = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_telnet_server_get_keymap(self, request: operations.ProtocolTelnetServerGetKeymapRequest) -> operations.ProtocolTelnetServerGetKeymapResponse:
        r"""Show the agent's TELNET keymap file name
        Keymap file name
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/telnet/server/get/keymap", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolTelnetServerGetKeymapResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[str]])
                res.protocol_telnet_server_get_keymap_200_application_json_strings = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_telnet_server_get_rulesdb(self, request: operations.ProtocolTelnetServerGetRulesdbRequest) -> operations.ProtocolTelnetServerGetRulesdbResponse:
        r"""Show the agent's TELNET rules db file name
        Rules db file name
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/telnet/server/get/rulesdb", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolTelnetServerGetRulesdbResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[str]])
                res.protocol_telnet_server_get_rulesdb_200_application_json_strings = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_telnet_server_get_state(self, request: operations.ProtocolTelnetServerGetStateRequest) -> operations.ProtocolTelnetServerGetStateResponse:
        r"""Show the agent's TELNET server state
        Return 1 means accepting connections, 0 not
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/telnet/server/get/state", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolTelnetServerGetStateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[int]])
                res.protocol_telnet_server_get_state_200_application_json_int32_integers = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_telnet_server_get_userdb(self, request: operations.ProtocolTelnetServerGetUserdbRequest) -> operations.ProtocolTelnetServerGetUserdbResponse:
        r"""Show the agent's TELNET user db file name
        User db file name
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/telnet/server/get/userdb", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolTelnetServerGetUserdbResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[str]])
                res.protocol_telnet_server_get_userdb_200_application_json_strings = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_telnet_server_get_users(self, request: operations.ProtocolTelnetServerGetUsersRequest) -> operations.ProtocolTelnetServerGetUsersResponse:
        r"""Show the agent's TELNET users
        List of users
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/telnet/server/get/users", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolTelnetServerGetUsersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.TelnetUser]])
                res.telnet_users = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_telnet_set_config(self, request: operations.ProtocolTelnetSetConfigRequest) -> operations.ProtocolTelnetSetConfigResponse:
        r"""Set the agent's TELNET configuration
        Agent's TELNET configuration with port,rule,prompt,paging_prompt,userdb,keymap
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/telnet/set/config/{argument}/{value}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolTelnetSetConfigResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.protocol_telnet_set_config_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_telnet_set_trace(self, request: operations.ProtocolTelnetSetTraceRequest) -> operations.ProtocolTelnetSetTraceResponse:
        r"""Set the agent's TELNET traffic tracing
        1 to enable, 0 to disable
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/telnet/set/trace/{enableOrNot}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolTelnetSetTraceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.protocol_telnet_set_trace_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    