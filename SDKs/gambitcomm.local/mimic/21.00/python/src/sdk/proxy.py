import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class Proxy:
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

    
    def protocol_proxy_get_args(self, request: operations.ProtocolProxyGetArgsRequest) -> operations.ProtocolProxyGetArgsResponse:
        r"""Show the agent's PROXY argument structure
        Agent's PROXY configuration with port,rule,prompt,paging_prompt,userdb,keymap
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/proxy/get/args", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolProxyGetArgsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.protocol_proxy_get_args_200_application_json_object = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_proxy_get_config(self, request: operations.ProtocolProxyGetConfigRequest) -> operations.ProtocolProxyGetConfigResponse:
        r"""Show the agent's PROXY configuration
        Agent's PROXY configuration with port,rule,prompt,paging_prompt,userdb,keymap
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/proxy/get/config", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolProxyGetConfigResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConfigProxy])
                res.config_proxy = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_proxy_get_statistics(self, request: operations.ProtocolProxyGetStatisticsRequest) -> operations.ProtocolProxyGetStatisticsResponse:
        r"""Show the agent's PROXY statistics
        Statistics of fields indicated in the headers
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/proxy/get/statistics", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolProxyGetStatisticsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[int]])
                res.protocol_proxy_get_statistics_200_application_json_int32_integers = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_proxy_get_stats_hdr(self) -> operations.ProtocolProxyGetStatsHdrResponse:
        r"""Show the PROXY statistics headers
        The headers of statistics fields
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/mimic/protocol/msg/proxy/get/stats_hdr"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolProxyGetStatsHdrResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[str]])
                res.protocol_proxy_get_stats_hdr_200_application_json_strings = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_proxy_get_trace(self, request: operations.ProtocolProxyGetTraceRequest) -> operations.ProtocolProxyGetTraceResponse:
        r"""Show the agent's PROXY traffic tracing
        Trace 1 means enabled, 0 means not
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/proxy/get/trace", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolProxyGetTraceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConfigProxy])
                res.config_proxy = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_proxy_port_add(self, request: operations.ProtocolProxyPortAddRequest) -> operations.ProtocolProxyPortAddResponse:
        r"""Add individual proxy target on the agent and the simulator host
        Additional proxy target
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/proxy/port/add/{port}/{target}/{targetPort}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolProxyPortAddResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.protocol_proxy_port_add_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_proxy_port_isstarted(self, request: operations.ProtocolProxyPortIsstartedRequest) -> operations.ProtocolProxyPortIsstartedResponse:
        r"""Check individual target
        Check individual target
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/proxy/port/isStarted/{port}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolProxyPortIsstartedResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.protocol_proxy_port_isstarted_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_proxy_port_list(self, request: operations.ProtocolProxyPortListRequest) -> operations.ProtocolProxyPortListResponse:
        r"""List all proxy targets
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/proxy/port/list", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolProxyPortListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[int]])
                res.protocol_proxy_port_list_200_application_json_int32_integers = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_proxy_port_remove(self, request: operations.ProtocolProxyPortRemoveRequest) -> operations.ProtocolProxyPortRemoveResponse:
        r"""Remove individual proxy target on the agent and the simulator host
        Remove proxy target
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/proxy/port/remove/{port}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolProxyPortRemoveResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.protocol_proxy_port_remove_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_proxy_port_start(self, request: operations.ProtocolProxyPortStartRequest) -> operations.ProtocolProxyPortStartResponse:
        r"""Start additional target
        Start additional target
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/proxy/port/start/{port}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolProxyPortStartResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.protocol_proxy_port_start_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_proxy_port_stop(self, request: operations.ProtocolProxyPortStopRequest) -> operations.ProtocolProxyPortStopResponse:
        r"""Stop additional target
        Stop additional target
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/proxy/port/stop/{port}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolProxyPortStopResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.protocol_proxy_port_stop_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_proxy_set_config(self, request: operations.ProtocolProxySetConfigRequest) -> operations.ProtocolProxySetConfigResponse:
        r"""Set the agent's PROXY configuration
        Agent's PROXY configuration with port,rule,prompt,paging_prompt,userdb,keymap
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/proxy/set/config/{argument}/{value}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolProxySetConfigResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.protocol_proxy_set_config_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_proxy_set_trace(self, request: operations.ProtocolProxySetTraceRequest) -> operations.ProtocolProxySetTraceResponse:
        r"""Set the agent's PROXY traffic tracing
        1 to enable, 0 to disable
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/proxy/set/trace/{enableOrNot}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolProxySetTraceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.protocol_proxy_set_trace_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    