import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class Ipmi:
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

    
    def protocol_ipmi_get_args(self, request: operations.ProtocolIpmiGetArgsRequest) -> operations.ProtocolIpmiGetArgsResponse:
        r"""Show the agent's IPMI argument structure
        Agent's IPMI configuration with port,rule,prompt,paging_prompt,userdb,keymap
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/ipmi/get/args", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolIpmiGetArgsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.protocol_ipmi_get_args_200_application_json_object = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_ipmi_get_attr(self, request: operations.ProtocolIpmiGetAttrRequest) -> operations.ProtocolIpmiGetAttrResponse:
        r"""Show the outgoing message's attributes
        Attribute can be working_authtype ,session_id, outbound_seq, inbound_seq , field_N
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/ipmi/get/{attr}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolIpmiGetAttrResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.protocol_ipmi_get_attr_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_ipmi_get_config(self, request: operations.ProtocolIpmiGetConfigRequest) -> operations.ProtocolIpmiGetConfigResponse:
        r"""Show the agent's IPMI configuration
        Agent's IPMI configuration with port,rule,prompt,paging_prompt,userdb,keymap
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/ipmi/get/config", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolIpmiGetConfigResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConfigIpmi])
                res.config_ipmi = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_ipmi_get_statistics(self, request: operations.ProtocolIpmiGetStatisticsRequest) -> operations.ProtocolIpmiGetStatisticsResponse:
        r"""Show the agent's IPMI statistics
        Statistics of fields indicated in the headers
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/ipmi/get/statistics", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolIpmiGetStatisticsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[int]])
                res.protocol_ipmi_get_statistics_200_application_json_int32_integers = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_ipmi_get_stats_hdr(self) -> operations.ProtocolIpmiGetStatsHdrResponse:
        r"""Show the IPMI statistics headers
        The headers of statistics fields
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/mimic/protocol/msg/ipmi/get/stats_hdr"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolIpmiGetStatsHdrResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[str]])
                res.protocol_ipmi_get_stats_hdr_200_application_json_strings = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_ipmi_get_trace(self, request: operations.ProtocolIpmiGetTraceRequest) -> operations.ProtocolIpmiGetTraceResponse:
        r"""Show the agent's IPMI traffic tracing
        Trace 1 means enabled, 0 means not
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/ipmi/get/trace", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolIpmiGetTraceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConfigIpmi])
                res.config_ipmi = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_ipmi_set_attr(self, request: operations.ProtocolIpmiSetAttrRequest) -> operations.ProtocolIpmiSetAttrResponse:
        r"""Set the outgoing message's attributes
        Attribute can be working_authtype ,session_id, outbound_seq, inbound_seq , field_N
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/ipmi/set/{attr}/{value}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolIpmiSetAttrResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.protocol_ipmi_set_attr_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_ipmi_set_config(self, request: operations.ProtocolIpmiSetConfigRequest) -> operations.ProtocolIpmiSetConfigResponse:
        r"""Set the agent's IPMI configuration
        Agent's IPMI configuration with port,rule,prompt,paging_prompt,userdb,keymap
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/ipmi/set/config/{argument}/{value}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolIpmiSetConfigResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.protocol_ipmi_set_config_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_ipmi_set_trace(self, request: operations.ProtocolIpmiSetTraceRequest) -> operations.ProtocolIpmiSetTraceResponse:
        r"""Set the agent's IPMI traffic tracing
        1 to enable, 0 to disable
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/ipmi/set/trace/{enableOrNot}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolIpmiSetTraceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.protocol_ipmi_set_trace_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    