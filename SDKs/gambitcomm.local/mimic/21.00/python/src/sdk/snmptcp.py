import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class Snmptcp:
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

    
    def protocol_snmptcp_get_args(self, request: operations.ProtocolSnmptcpGetArgsRequest) -> operations.ProtocolSnmptcpGetArgsResponse:
        r"""Show the agent's SNMPTCP argument structure
        Agent's SNMPTCP configuration with port,rule,prompt,paging_prompt,userdb,keymap
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/snmptcp/get/args", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolSnmptcpGetArgsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.protocol_snmptcp_get_args_200_application_json_object = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_snmptcp_get_config(self, request: operations.ProtocolSnmptcpGetConfigRequest) -> operations.ProtocolSnmptcpGetConfigResponse:
        r"""Show the agent's SNMPTCP configuration
        Agent's SNMPTCP configuration with port,rule,prompt,paging_prompt,userdb,keymap
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/snmptcp/get/config", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolSnmptcpGetConfigResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConfigSnmptcp])
                res.config_snmptcp = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_snmptcp_get_statistics(self, request: operations.ProtocolSnmptcpGetStatisticsRequest) -> operations.ProtocolSnmptcpGetStatisticsResponse:
        r"""Show the agent's SNMPTCP statistics
        Statistics of fields indicated in the headers
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/snmptcp/get/statistics", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolSnmptcpGetStatisticsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[int]])
                res.protocol_snmptcp_get_statistics_200_application_json_int32_integers = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_snmptcp_get_stats_hdr(self) -> operations.ProtocolSnmptcpGetStatsHdrResponse:
        r"""Show the SNMPTCP statistics headers
        The headers of statistics fields
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/mimic/protocol/msg/snmptcp/get/stats_hdr"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolSnmptcpGetStatsHdrResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[str]])
                res.protocol_snmptcp_get_stats_hdr_200_application_json_strings = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_snmptcp_get_trace(self, request: operations.ProtocolSnmptcpGetTraceRequest) -> operations.ProtocolSnmptcpGetTraceResponse:
        r"""Show the agent's SNMPTCP traffic tracing
        Trace 1 means enabled, 0 means not
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/snmptcp/get/trace", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolSnmptcpGetTraceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConfigSnmptcp])
                res.config_snmptcp = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_snmptcp_ipalias_disable(self, request: operations.ProtocolSnmptcpIpaliasDisableRequest) -> operations.ProtocolSnmptcpIpaliasDisableResponse:
        r"""Disable individual IP aliases on the agent and the simulator host
        By default, the MIMIC SNMPTCP server listens on all the IP addresses (aliases) that are configured for an agent
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/snmptcp/ipalias/disable/{ipaddress}/{port}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolSnmptcpIpaliasDisableResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.protocol_snmptcp_ipalias_disable_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_snmptcp_ipalias_enable(self, request: operations.ProtocolSnmptcpIpaliasEnableRequest) -> operations.ProtocolSnmptcpIpaliasEnableResponse:
        r"""Enable individual IP aliases on the agent and the simulator host
        By default, the MIMIC SNMPTCP server listens on all the IP addresses (aliases) that are configured for an agent
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/snmptcp/ipalias/enable/{ipaddress}/{port}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolSnmptcpIpaliasEnableResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.protocol_snmptcp_ipalias_enable_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_snmptcp_ipalias_isenabled(self, request: operations.ProtocolSnmptcpIpaliasIsenabledRequest) -> operations.ProtocolSnmptcpIpaliasIsenabledResponse:
        r"""Check individual IP aliases on the agent and the simulator host
        By default, the MIMIC SNMPTCP server listens on all the IP addresses (aliases) that are configured for an agent
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/snmptcp/ipalias/isenabled/{ipaddress}/{port}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolSnmptcpIpaliasIsenabledResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.protocol_snmptcp_ipalias_isenabled_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_snmptcp_ipalias_list(self, request: operations.ProtocolSnmptcpIpaliasListRequest) -> operations.ProtocolSnmptcpIpaliasListResponse:
        r"""List all IP aliases on the agent and the simulator host
        By default, the MIMIC SNMPTCP server listens on all the IP addresses (aliases) that are configured for an agent
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/snmptcp/ipalias/list", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolSnmptcpIpaliasListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.IPAlias]])
                res.ip_aliases = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_snmptcp_set_config(self, request: operations.ProtocolSnmptcpSetConfigRequest) -> operations.ProtocolSnmptcpSetConfigResponse:
        r"""Set the agent's SNMPTCP configuration
        Agent's SNMPTCP configuration with port,rule,prompt,paging_prompt,userdb,keymap
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/snmptcp/set/config/{argument}/{value}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolSnmptcpSetConfigResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.protocol_snmptcp_set_config_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_snmptcp_set_trace(self, request: operations.ProtocolSnmptcpSetTraceRequest) -> operations.ProtocolSnmptcpSetTraceResponse:
        r"""Set the agent's SNMPTCP traffic tracing
        1 to enable, 0 to disable
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/snmptcp/set/trace/{enableOrNot}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolSnmptcpSetTraceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.protocol_snmptcp_set_trace_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    