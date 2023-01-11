import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class Tftp:
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

    
    def protocol_tftp_get_args(self, request: operations.ProtocolTftpGetArgsRequest) -> operations.ProtocolTftpGetArgsResponse:
        r"""Show the agent's TFTP argument structure
        Agent's TFTP configuration with port,rule,prompt,paging_prompt,userdb,keymap
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/tftp/get/args", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolTftpGetArgsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.protocol_tftp_get_args_200_application_json_object = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_tftp_get_config(self, request: operations.ProtocolTftpGetConfigRequest) -> operations.ProtocolTftpGetConfigResponse:
        r"""Show the agent's TFTP configuration
        Agent's TFTP configuration
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/tftp/get/config", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolTftpGetConfigResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConfigTftp])
                res.config_tftp = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_tftp_get_statistics(self, request: operations.ProtocolTftpGetStatisticsRequest) -> operations.ProtocolTftpGetStatisticsResponse:
        r"""Show the agent's TFTP statistics
        Statistics of fields indicated in the headers
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/tftp/get/statistics", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolTftpGetStatisticsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[int]])
                res.protocol_tftp_get_statistics_200_application_json_int32_integers = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_tftp_get_stats_hdr(self) -> operations.ProtocolTftpGetStatsHdrResponse:
        r"""Show the TFTP statistics headers
        The headers of statistics fields
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/mimic/protocol/msg/tftp/get/stats_hdr"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolTftpGetStatsHdrResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[str]])
                res.protocol_tftp_get_stats_hdr_200_application_json_strings = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_tftp_get_trace(self, request: operations.ProtocolTftpGetTraceRequest) -> operations.ProtocolTftpGetTraceResponse:
        r"""Show the agent's TFTP traffic tracing
        Trace 1 means enabled, 0 means not
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/tftp/get/trace", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolTftpGetTraceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConfigTftp])
                res.config_tftp = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_tftp_session_get_parameter(self, request: operations.ProtocolTftpSessionGetParameterRequest) -> operations.ProtocolTftpSessionGetParameterResponse:
        r"""Show a parameter of a TFTP sesssion
        Parameter is server , port , or dstfile
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/tftp/{sessionID}/get/{parameter}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolTftpSessionGetParameterResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.protocol_tftp_session_get_parameter_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_tftp_session_read(self, request: operations.ProtocolTftpSessionReadRequest) -> operations.ProtocolTftpSessionReadResponse:
        r"""Create a read session to download srcfile from server
        Session ID is returned
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/tftp/session/read/server/{srcfile}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolTftpSessionReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[int]])
                res.protocol_tftp_session_read_200_application_json_int32_integers = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_tftp_session_set_parameter(self, request: operations.ProtocolTftpSessionSetParameterRequest) -> operations.ProtocolTftpSessionSetParameterResponse:
        r"""Set a parameter of a TFTP sesssion
        Parameter is server , port , or dstfile
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/tftp/{sessionID}/set/{parameter}/{value}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolTftpSessionSetParameterResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.protocol_tftp_session_set_parameter_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_tftp_session_start(self, request: operations.ProtocolTftpSessionStartRequest) -> operations.ProtocolTftpSessionStartResponse:
        r"""Start a TFTP sesssion
        Start uploading or downloading the file
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/tftp/{sessionID}/start", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolTftpSessionStartResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.protocol_tftp_session_start_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_tftp_session_status(self, request: operations.ProtocolTftpSessionStatusRequest) -> operations.ProtocolTftpSessionStatusResponse:
        r"""Check a TFTP sesssion's status
        Status includes running state, bytes transfered, and time elapsed
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/tftp/{sessionID}/status", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolTftpSessionStatusResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.protocol_tftp_session_status_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_tftp_session_stop(self, request: operations.ProtocolTftpSessionStopRequest) -> operations.ProtocolTftpSessionStopResponse:
        r"""Stop a TFTP sesssion
        Stop uploading or downloading the file
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/tftp/{sessionID}/stop", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolTftpSessionStopResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.protocol_tftp_session_stop_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_tftp_session_write(self, request: operations.ProtocolTftpSessionWriteRequest) -> operations.ProtocolTftpSessionWriteResponse:
        r"""Create a read session to upload srcfile to server
        Session ID is returned
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/tftp/session/write/server/{srcfile}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolTftpSessionWriteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[int]])
                res.protocol_tftp_session_write_200_application_json_int32_integers = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_tftp_set_config(self, request: operations.ProtocolTftpSetConfigRequest) -> operations.ProtocolTftpSetConfigResponse:
        r"""Set the agent's TFTP configuration
        Agent's TFTP configuration
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/tftp/set/config/{argument}/{value}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolTftpSetConfigResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.protocol_tftp_set_config_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_tftp_set_trace(self, request: operations.ProtocolTftpSetTraceRequest) -> operations.ProtocolTftpSetTraceResponse:
        r"""Set the agent's TFTP traffic tracing
        1 to enable, 0 to disable
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/tftp/set/trace/{enableOrNot}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolTftpSetTraceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.protocol_tftp_set_trace_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    