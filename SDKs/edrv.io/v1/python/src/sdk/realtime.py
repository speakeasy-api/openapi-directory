import requests
from sdk.models import operations
from . import utils

class Realtime:
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

    
    def get_realtime(self, request: operations.GetRealtimeRequest) -> operations.GetRealtimeResponse:
        r"""Use to request a Websockets handshake
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/realtime"
        
        headers = utils.get_headers(request.headers)
        
        client = self._security_client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRealtimeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 101:
            pass

        return res

    