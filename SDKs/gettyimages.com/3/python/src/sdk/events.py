import requests
from sdk.models import operations
from . import utils

class Events:
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

    
    def get_v3_events(self, request: operations.GetV3EventsRequest) -> operations.GetV3EventsResponse:
        r"""Get metadata for multiple events
        This endpoint returns the detailed event metadata for all specified events. Getty Images news, sports and entertainment photographers and
        videographers cover editorially relevant events occurring around the world.  All images or video clips produced in association with 
        an event, are assigned the same EventID. EventIDs are part of the meta-data returned in SearchForImages Results. Only content 
        produced under a Getty Images brand name (Getty Images News, Getty Images Sports, Getty Images Entertainment, Film Magic, Wire Image) 
        will be consistently assigned an EventID. The Event framework may also be used to group similar content, such as 
        \"Hats from the Royal Wedding\" or \"Odd-ballOffbeat images of the week\". 
        
        You'll need an API key and access token to use this resource.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v3/events"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetV3EventsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_v3_events_id_(self, request: operations.GetV3EventsIDRequest) -> operations.GetV3EventsIDResponse:
        r"""Get metadata for a single event
        This endpoint returns the detailed event metadata for a specified event. Getty Images news, sports and entertainment 
        photographers and videographers cover editorially relevant events occurring around the world.  
        All images or video clips produced in association with an event, are assigned the same EventID. 
        EventIDs are part of the meta-data returned in SearchForImages Results. Only content produced under a Getty Images 
        brand name (Getty Images News, Getty Images Sports, Getty Images Entertainment, Film Magic, Wire Image) will be 
        consistently assigned an EventID. The Event framework may also be used to group similar content, such as 
        \"Hats from the Royal Wedding\" or \"Odd-ballOffbeat images of the week\". 
        
        You'll need an API key and access token to use this resource.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/events/{id}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetV3EventsIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    