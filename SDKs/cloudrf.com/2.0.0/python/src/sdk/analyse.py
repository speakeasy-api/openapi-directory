import requests
from sdk.models import operations
from . import utils

class Analyse:
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

    
    def interference(self, request: operations.InterferenceRequest) -> operations.InterferenceResponse:
        r"""Find the best server for overlapping coverage
        Merge and analyse sites within a network channel to determine the best server at a given location. Each site will be dynamically allocated a monochrome colour from a palette and the strongest signal promoted at a given location.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/interference"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.InterferenceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def mesh(self, request: operations.MeshRequest) -> operations.MeshResponse:
        r"""Merge sites into a super layer.
        A merge of 'area' calculations for a network to create a single super layer. Stronger signals are promoted over weaker ones. The same colour key must be used.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/mesh"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.MeshResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def network(self, request: operations.NetworkRequest) -> operations.NetworkResponse:
        r"""Find the best server for somewhere
        Query your network to find the best server(s) for a given receiver/customer location. A previously generated network is required.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/network"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.NetworkResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    