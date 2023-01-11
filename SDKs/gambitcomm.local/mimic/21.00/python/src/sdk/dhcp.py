import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class Dhcp:
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

    
    def protocol_dhcp_get_args(self, request: operations.ProtocolDhcpGetArgsRequest) -> operations.ProtocolDhcpGetArgsResponse:
        r"""Show the agent's DHCP argument structure
        Agent's DHCP configuration particulars
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/dhcp/get/args", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolDhcpGetArgsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.protocol_dhcp_get_args_200_application_json_object = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_dhcp_get_config(self, request: operations.ProtocolDhcpGetConfigRequest) -> operations.ProtocolDhcpGetConfigResponse:
        r"""Show the agent's DHCP configuration
        Agent's DHCP configuration hwaddr,classid,add_options,script
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/dhcp/get/config", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolDhcpGetConfigResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConfigDhcp])
                res.config_dhcp = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_dhcp_get_statistics(self, request: operations.ProtocolDhcpGetStatisticsRequest) -> operations.ProtocolDhcpGetStatisticsResponse:
        r"""Show the agent's DHCP statistics
        Statistics of fields indicated in the headers
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/dhcp/get/statistics", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolDhcpGetStatisticsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[int]])
                res.protocol_dhcp_get_statistics_200_application_json_int32_integers = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_dhcp_get_stats_hdr(self) -> operations.ProtocolDhcpGetStatsHdrResponse:
        r"""Show the DHCP statistics headers
        The headers of statistics fields
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/mimic/protocol/msg/dhcp/get/stats_hdr"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolDhcpGetStatsHdrResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[str]])
                res.protocol_dhcp_get_stats_hdr_200_application_json_strings = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_dhcp_get_trace(self, request: operations.ProtocolDhcpGetTraceRequest) -> operations.ProtocolDhcpGetTraceResponse:
        r"""Show the agent's DHCP traffic tracing
        Trace 1 means enabled, 0 means not
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/dhcp/get/trace", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolDhcpGetTraceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConfigDhcp])
                res.config_dhcp = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_dhcp_params(self, request: operations.ProtocolDhcpParamsRequest) -> operations.ProtocolDhcpParamsResponse:
        r"""Show the parameters configured by the server in its DHCP-OFFER message
        DHCP-OFFER message parameters
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/dhcp/params", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolDhcpParamsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[dict[str, Any]]])
                res.protocol_dhcp_params_200_application_json_objects = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_dhcp_set_config(self, request: operations.ProtocolDhcpSetConfigRequest) -> operations.ProtocolDhcpSetConfigResponse:
        r"""Set the agent's DHCP configuration
        Agent's DHCP configuration with port,rule,prompt,paging_prompt,userdb,keymap
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/dhcp/set/config/{argument}/{value}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolDhcpSetConfigResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.protocol_dhcp_set_config_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_dhcp_set_trace(self, request: operations.ProtocolDhcpSetTraceRequest) -> operations.ProtocolDhcpSetTraceResponse:
        r"""Set the agent's DHCP traffic tracing
        1 to enable, 0 to disable
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/dhcp/set/trace/{enableOrNot}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolDhcpSetTraceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.protocol_dhcp_set_trace_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    