import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class Syslog:
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

    
    def protocol_syslog_get_args(self, request: operations.ProtocolSyslogGetArgsRequest) -> operations.ProtocolSyslogGetArgsResponse:
        r"""Show the agent's SYSLOG argument structure
        Agent's SYSLOG configuration with port,rule,prompt,paging_prompt,userdb,keymap
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/syslog/get/args", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolSyslogGetArgsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.protocol_syslog_get_args_200_application_json_object = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_syslog_get_attr(self, request: operations.ProtocolSyslogGetAttrRequest) -> operations.ProtocolSyslogGetAttrResponse:
        r"""Show the outgoing message's attributes
        Attribute can be server , sequence , separator , hostname , timestamp
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/syslog/get/{attr}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolSyslogGetAttrResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.protocol_syslog_get_attr_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_syslog_get_config(self, request: operations.ProtocolSyslogGetConfigRequest) -> operations.ProtocolSyslogGetConfigResponse:
        r"""Show the agent's SYSLOG configuration
        Agent's SYSLOG configuration with port,rule,prompt,paging_prompt,userdb,keymap
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/syslog/get/config", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolSyslogGetConfigResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConfigSyslog])
                res.config_syslog = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_syslog_get_statistics(self, request: operations.ProtocolSyslogGetStatisticsRequest) -> operations.ProtocolSyslogGetStatisticsResponse:
        r"""Show the agent's SYSLOG statistics
        Statistics of fields indicated in the headers
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/syslog/get/statistics", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolSyslogGetStatisticsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[int]])
                res.protocol_syslog_get_statistics_200_application_json_int32_integers = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_syslog_get_stats_hdr(self) -> operations.ProtocolSyslogGetStatsHdrResponse:
        r"""Show the SYSLOG statistics headers
        The headers of statistics fields
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/mimic/protocol/msg/syslog/get/stats_hdr"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolSyslogGetStatsHdrResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[str]])
                res.protocol_syslog_get_stats_hdr_200_application_json_strings = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_syslog_get_trace(self, request: operations.ProtocolSyslogGetTraceRequest) -> operations.ProtocolSyslogGetTraceResponse:
        r"""Show the agent's SYSLOG traffic tracing
        Trace 1 means enabled, 0 means not
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/syslog/get/trace", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolSyslogGetTraceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConfigSyslog])
                res.config_syslog = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_syslog_send(self, request: operations.ProtocolSyslogSendRequest) -> operations.ProtocolSyslogSendResponse:
        r"""Set the agent's SYSLOG traffic tracing
        1 to enable, 0 to disable
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/syslog/send/{pri}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolSyslogSendResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.protocol_syslog_send_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_syslog_set_attr(self, request: operations.ProtocolSyslogSetAttrRequest) -> operations.ProtocolSyslogSetAttrResponse:
        r"""Set the outgoing message's attributes
        Attribute can be server , sequence , separator , hostname , timestamp
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/syslog/set/{attr}/{value}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolSyslogSetAttrResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.protocol_syslog_set_attr_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_syslog_set_config(self, request: operations.ProtocolSyslogSetConfigRequest) -> operations.ProtocolSyslogSetConfigResponse:
        r"""Set the agent's SYSLOG configuration
        Agent's SYSLOG configuration with port,rule,prompt,paging_prompt,userdb,keymap
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/syslog/set/config/{argument}/{value}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolSyslogSetConfigResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.protocol_syslog_set_config_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_syslog_set_trace(self, request: operations.ProtocolSyslogSetTraceRequest) -> operations.ProtocolSyslogSetTraceResponse:
        r"""Set the agent's SYSLOG traffic tracing
        1 to enable, 0 to disable
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/syslog/set/trace/{enableOrNot}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolSyslogSetTraceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.protocol_syslog_set_trace_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    