import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class Web:
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

    
    def protocol_web_get_args(self, request: operations.ProtocolWebGetArgsRequest) -> operations.ProtocolWebGetArgsResponse:
        r"""Show the agent's WEB argument structure
        Agent's WEB configuration with port,rule,prompt,paging_prompt,userdb,keymap
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/web/get/args", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolWebGetArgsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.protocol_web_get_args_200_application_json_object = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_web_get_config(self, request: operations.ProtocolWebGetConfigRequest) -> operations.ProtocolWebGetConfigResponse:
        r"""Show the agent's WEB configuration
        Agent's WEB configuration with port,rule,prompt,paging_prompt,userdb,keymap
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/web/get/config", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolWebGetConfigResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConfigWeb])
                res.config_web = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_web_get_statistics(self, request: operations.ProtocolWebGetStatisticsRequest) -> operations.ProtocolWebGetStatisticsResponse:
        r"""Show the agent's WEB statistics
        Statistics of fields indicated in the headers
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/web/get/statistics", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolWebGetStatisticsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[int]])
                res.protocol_web_get_statistics_200_application_json_int32_integers = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_web_get_stats_hdr(self) -> operations.ProtocolWebGetStatsHdrResponse:
        r"""Show the WEB statistics headers
        The headers of statistics fields
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/mimic/protocol/msg/web/get/stats_hdr"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolWebGetStatsHdrResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[str]])
                res.protocol_web_get_stats_hdr_200_application_json_strings = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_web_get_trace(self, request: operations.ProtocolWebGetTraceRequest) -> operations.ProtocolWebGetTraceResponse:
        r"""Show the agent's WEB traffic tracing
        Trace 1 means enabled, 0 means not
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/web/get/trace", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolWebGetTraceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConfigWeb])
                res.config_web = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_web_port_add(self, request: operations.ProtocolWebPortAddRequest) -> operations.ProtocolWebPortAddResponse:
        r"""Add the agent's WEB port
        Add port
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/web/port/add/{port}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolWebPortAddResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.protocol_web_port_add_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_web_port_exists(self, request: operations.ProtocolWebPortExistsRequest) -> operations.ProtocolWebPortExistsResponse:
        r"""Show the agent's WEB port
        Check the port. 1 means existing, 0 means not
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/web/port/exists/{port}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolWebPortExistsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[str]])
                res.protocol_web_port_exists_200_application_json_strings = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_web_port_remove(self, request: operations.ProtocolWebPortRemoveRequest) -> operations.ProtocolWebPortRemoveResponse:
        r"""Remove the agent's WEB port
        Remove port
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/web/port/remove/{port}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolWebPortRemoveResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.protocol_web_port_remove_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_web_port_set(self, request: operations.ProtocolWebPortSetRequest) -> operations.ProtocolWebPortSetResponse:
        r"""Set the agent's WEB port attribute
        Set port
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/web/port/set/{port}/{protocol}/{version}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolWebPortSetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.protocol_web_port_set_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_web_port_start(self, request: operations.ProtocolWebPortStartRequest) -> operations.ProtocolWebPortStartResponse:
        r"""Start the agent's WEB port
        Start port
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/web/port/start/{port}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolWebPortStartResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.protocol_web_port_start_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_web_port_stop(self, request: operations.ProtocolWebPortStopRequest) -> operations.ProtocolWebPortStopResponse:
        r"""Stop the agent's WEB port
        Stop port
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/web/port/stop/{port}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolWebPortStopResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.protocol_web_port_stop_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_web_set_config(self, request: operations.ProtocolWebSetConfigRequest) -> operations.ProtocolWebSetConfigResponse:
        r"""Set the agent's WEB configuration
        Agent's WEB configuration with port,rule,prompt,paging_prompt,userdb,keymap
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/web/set/config/{argument}/{value}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolWebSetConfigResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.protocol_web_set_config_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_web_set_trace(self, request: operations.ProtocolWebSetTraceRequest) -> operations.ProtocolWebSetTraceResponse:
        r"""Set the agent's WEB traffic tracing
        1 to enable, 0 to disable
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/web/set/trace/{enableOrNot}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolWebSetTraceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.protocol_web_set_trace_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    