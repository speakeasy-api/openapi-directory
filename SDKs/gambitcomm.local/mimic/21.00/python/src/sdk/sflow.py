import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class Sflow:
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

    
    def protocol_sflow_get_args(self, request: operations.ProtocolSflowGetArgsRequest) -> operations.ProtocolSflowGetArgsResponse:
        r"""Show the agent's SFLOW argument structure
        Agent's SFLOW configuration with port,rule,prompt,paging_prompt,userdb,keymap
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/sflow/get/args", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolSflowGetArgsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.protocol_sflow_get_args_200_application_json_object = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_sflow_get_config(self, request: operations.ProtocolSflowGetConfigRequest) -> operations.ProtocolSflowGetConfigResponse:
        r"""Show the agent's SFLOW configuration
        Agent's SFLOW configuration with port,rule,prompt,paging_prompt,userdb,keymap
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/sflow/get/config", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolSflowGetConfigResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConfigSflow])
                res.config_sflow = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_sflow_get_statistics(self, request: operations.ProtocolSflowGetStatisticsRequest) -> operations.ProtocolSflowGetStatisticsResponse:
        r"""Show the agent's SFLOW statistics
        Statistics of fields indicated in the headers
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/sflow/get/statistics", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolSflowGetStatisticsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[int]])
                res.protocol_sflow_get_statistics_200_application_json_int32_integers = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_sflow_get_stats_hdr(self) -> operations.ProtocolSflowGetStatsHdrResponse:
        r"""Show the SFLOW statistics headers
        The headers of statistics fields
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/mimic/protocol/msg/sflow/get/stats_hdr"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolSflowGetStatsHdrResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[str]])
                res.protocol_sflow_get_stats_hdr_200_application_json_strings = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_sflow_get_trace(self, request: operations.ProtocolSflowGetTraceRequest) -> operations.ProtocolSflowGetTraceResponse:
        r"""Show the agent's SFLOW traffic tracing
        Trace 1 means enabled, 0 means not
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/sflow/get/trace", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolSflowGetTraceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConfigSflow])
                res.config_sflow = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_sflow_halt(self, request: operations.ProtocolSflowHaltRequest) -> operations.ProtocolSflowHaltResponse:
        r"""Halt SFLOW traffic
        Halt SFLOW traffic
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/sflow/halt", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolSflowHaltResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.protocol_sflow_halt_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_sflow_reload(self, request: operations.ProtocolSflowReloadRequest) -> operations.ProtocolSflowReloadResponse:
        r"""Reload SFLOW configuration before resuming traffic
        Reload SFLOW configuration before resuming traffic
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/sflow/reload", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolSflowReloadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.protocol_sflow_reload_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_sflow_resume(self, request: operations.ProtocolSflowResumeRequest) -> operations.ProtocolSflowResumeResponse:
        r"""Resuming traffic
        Resuming traffic
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/sflow/resume", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolSflowResumeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.protocol_sflow_resume_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_sflow_set_config(self, request: operations.ProtocolSflowSetConfigRequest) -> operations.ProtocolSflowSetConfigResponse:
        r"""Set the agent's SFLOW configuration
        Agent's SFLOW configuration with port,rule,prompt,paging_prompt,userdb,keymap
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/sflow/set/config/{argument}/{value}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolSflowSetConfigResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.protocol_sflow_set_config_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_sflow_set_trace(self, request: operations.ProtocolSflowSetTraceRequest) -> operations.ProtocolSflowSetTraceResponse:
        r"""Set the agent's SFLOW traffic tracing
        1 to enable, 0 to disable
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/sflow/set/trace/{enableOrNot}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolSflowSetTraceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.protocol_sflow_set_trace_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    