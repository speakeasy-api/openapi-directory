import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class Netflow:
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

    
    def protocol_netflow_change_attr(self, request: operations.ProtocolNetflowChangeAttrRequest) -> operations.ProtocolNetflowChangeAttrResponse:
        r"""Change NETFLOW export attributes
        Change attributes
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/netflow/flow/change/{flowset-uid}/{field-num}/{attr}/{value}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolNetflowChangeAttrResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.protocol_netflow_change_attr_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_netflow_change_dfs(self, request: operations.ProtocolNetflowChangeDfsRequest) -> operations.ProtocolNetflowChangeDfsResponse:
        r"""Change NETFLOW data export interval
        Interval in msec .
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/netflow/flow/change/dfs_interval/{interval}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolNetflowChangeDfsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.protocol_netflow_change_dfs_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_netflow_change_tfs(self, request: operations.ProtocolNetflowChangeTfsRequest) -> operations.ProtocolNetflowChangeTfsResponse:
        r"""Change NETFLOW template export interval
        Interval in msec .
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/netflow/flow/change/tfs_interval/{interval}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolNetflowChangeTfsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.protocol_netflow_change_tfs_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_netflow_get_args(self, request: operations.ProtocolNetflowGetArgsRequest) -> operations.ProtocolNetflowGetArgsResponse:
        r"""Show the agent's NETFLOW argument structure
        Agent's NETFLOW configuration with port,rule,prompt,paging_prompt,userdb,keymap
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/netflow/get/args", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolNetflowGetArgsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.protocol_netflow_get_args_200_application_json_object = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_netflow_get_config(self, request: operations.ProtocolNetflowGetConfigRequest) -> operations.ProtocolNetflowGetConfigResponse:
        r"""Show the agent's NETFLOW configuration
        Agent's NETFLOW configuration with port,rule,prompt,paging_prompt,userdb,keymap
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/netflow/get/config", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolNetflowGetConfigResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConfigNetflow])
                res.config_netflow = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_netflow_get_statistics(self, request: operations.ProtocolNetflowGetStatisticsRequest) -> operations.ProtocolNetflowGetStatisticsResponse:
        r"""Show the agent's NETFLOW statistics
        Statistics of fields indicated in the headers
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/netflow/get/statistics", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolNetflowGetStatisticsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[int]])
                res.protocol_netflow_get_statistics_200_application_json_int32_integers = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_netflow_get_stats_hdr(self) -> operations.ProtocolNetflowGetStatsHdrResponse:
        r"""Show the NETFLOW statistics headers
        The headers of statistics fields
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/mimic/protocol/msg/netflow/get/stats_hdr"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolNetflowGetStatsHdrResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[str]])
                res.protocol_netflow_get_stats_hdr_200_application_json_strings = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_netflow_get_trace(self, request: operations.ProtocolNetflowGetTraceRequest) -> operations.ProtocolNetflowGetTraceResponse:
        r"""Show the agent's NETFLOW traffic tracing
        Trace 1 means enabled, 0 means not
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/netflow/get/trace", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolNetflowGetTraceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConfigNetflow])
                res.config_netflow = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_netflow_halt(self, request: operations.ProtocolNetflowHaltRequest) -> operations.ProtocolNetflowHaltResponse:
        r"""Halt NETFLOW traffic
        Halt NETFLOW traffic
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/netflow/halt", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolNetflowHaltResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.protocol_netflow_halt_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_netflow_list(self, request: operations.ProtocolNetflowListRequest) -> operations.ProtocolNetflowListResponse:
        r"""Show list of NETFLOW exports
        Show list of NETFLOW exports
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/netflow/flow/list", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolNetflowListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[dict[str, Any]]])
                res.protocol_netflow_list_200_application_json_objects = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_netflow_reload(self, request: operations.ProtocolNetflowReloadRequest) -> operations.ProtocolNetflowReloadResponse:
        r"""Reload NETFLOW configuration before resuming traffic
        Reload NETFLOW configuration before resuming traffic
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/netflow/reload", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolNetflowReloadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.protocol_netflow_reload_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_netflow_resume(self, request: operations.ProtocolNetflowResumeRequest) -> operations.ProtocolNetflowResumeResponse:
        r"""Resuming traffic
        Resuming traffic
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/netflow/resume", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolNetflowResumeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.protocol_netflow_resume_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_netflow_set_collector(self, request: operations.ProtocolNetflowSetCollectorRequest) -> operations.ProtocolNetflowSetCollectorResponse:
        r"""Swap NETFLOW collector
        Allow changing collector without stopping agent
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/netflow/set/collector/{collectorIP}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolNetflowSetCollectorResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.protocol_netflow_set_collector_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_netflow_set_config(self, request: operations.ProtocolNetflowSetConfigRequest) -> operations.ProtocolNetflowSetConfigResponse:
        r"""Set the agent's NETFLOW configuration
        Agent's NETFLOW configuration with port,rule,prompt,paging_prompt,userdb,keymap
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/netflow/set/config/{argument}/{value}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolNetflowSetConfigResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.protocol_netflow_set_config_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_netflow_set_file_name(self, request: operations.ProtocolNetflowSetFileNameRequest) -> operations.ProtocolNetflowSetFileNameResponse:
        r"""Swap NETFLOW configuration file
        Allow reloading the configuration file for an agent without stopping agent
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/netflow/set/filename/{fileName}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolNetflowSetFileNameResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.protocol_netflow_set_file_name_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_netflow_set_trace(self, request: operations.ProtocolNetflowSetTraceRequest) -> operations.ProtocolNetflowSetTraceResponse:
        r"""Set the agent's NETFLOW traffic tracing
        1 to enable, 0 to disable
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/netflow/set/trace/{enableOrNot}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolNetflowSetTraceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.protocol_netflow_set_trace_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    