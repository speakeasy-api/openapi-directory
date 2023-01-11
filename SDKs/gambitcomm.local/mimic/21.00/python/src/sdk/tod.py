import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class Tod:
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

    
    def protocol_tod_get_args(self, request: operations.ProtocolTodGetArgsRequest) -> operations.ProtocolTodGetArgsResponse:
        r"""Show the agent's TOD argument structure
        Agent's TOD configuration
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/tod/get/args", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolTodGetArgsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.protocol_tod_get_args_200_application_json_object = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_tod_get_config(self, request: operations.ProtocolTodGetConfigRequest) -> operations.ProtocolTodGetConfigResponse:
        r"""Show the agent's TOD configuration
        Agent's TOD configuration
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/tod/get/config", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolTodGetConfigResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConfigTod])
                res.config_tod = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_tod_get_statistics(self, request: operations.ProtocolTodGetStatisticsRequest) -> operations.ProtocolTodGetStatisticsResponse:
        r"""Show the agent's TOD statistics
        Statistics of fields indicated in the headers
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/tod/get/statistics", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolTodGetStatisticsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[int]])
                res.protocol_tod_get_statistics_200_application_json_int32_integers = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_tod_get_stats_hdr(self) -> operations.ProtocolTodGetStatsHdrResponse:
        r"""Show the TOD statistics headers
        The headers of statistics fields
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/mimic/protocol/msg/tod/get/stats_hdr"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolTodGetStatsHdrResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[str]])
                res.protocol_tod_get_stats_hdr_200_application_json_strings = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_tod_get_trace(self, request: operations.ProtocolTodGetTraceRequest) -> operations.ProtocolTodGetTraceResponse:
        r"""Show the agent's TOD traffic tracing
        Trace 1 means enabled, 0 means not
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/tod/get/trace", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolTodGetTraceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConfigTod])
                res.config_tod = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_tod_gettime(self, request: operations.ProtocolTodGettimeRequest) -> operations.ProtocolTodGettimeResponse:
        r"""Retrieve TOD time
        Retrive time from server
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/tod/gettime/server/{serverAddr}/port/{portNum}/script/{scriptName}/timeout/{timeSec}/retries/{numRetries}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolTodGettimeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[str]])
                res.protocol_tod_gettime_200_application_json_strings = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_tod_set_config(self, request: operations.ProtocolTodSetConfigRequest) -> operations.ProtocolTodSetConfigResponse:
        r"""Set the agent's TOD configuration
        Agent's TOD configuration with port,rule,prompt,paging_prompt,userdb,keymap
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/tod/set/config/{argument}/{value}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolTodSetConfigResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.protocol_tod_set_config_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_tod_set_trace(self, request: operations.ProtocolTodSetTraceRequest) -> operations.ProtocolTodSetTraceResponse:
        r"""Set the agent's TOD traffic tracing
        1 to enable, 0 to disable
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/tod/set/trace/{enableOrNot}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolTodSetTraceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.protocol_tod_set_trace_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    