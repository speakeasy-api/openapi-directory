import requests
from typing import Optional
from sdk.models import operations
from . import utils

class Health:
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

    
    def get_heartbeat(self, request: operations.GetHeartbeatRequest) -> operations.GetHeartbeatResponse:
        r"""Ping the server for liveness
        """
        
        base_url = operations.GET_HEARTBEAT_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/heartbeat"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetHeartbeatResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/plain"):
                res.get_heartbeat_200_text_plain_string = r.content

        return res

    
    def get_server_health(self, request: operations.GetServerHealthRequest) -> operations.GetServerHealthResponse:
        r"""Get state of the server and its dependencies.
        """
        
        base_url = operations.GET_SERVER_HEALTH_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/health"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetServerHealthResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetServerHealth200ApplicationJSON])
                res.get_server_health_200_application_json_object = out

        return res

    