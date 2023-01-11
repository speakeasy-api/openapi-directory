import requests
from sdk.models import operations
from . import utils

class Artists:
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

    
    def get_v3_artists_images(self, request: operations.GetV3ArtistsImagesRequest) -> operations.GetV3ArtistsImagesResponse:
        r"""Search for images by a photographer
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v3/artists/images"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetV3ArtistsImagesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    def get_v3_artists_videos(self, request: operations.GetV3ArtistsVideosRequest) -> operations.GetV3ArtistsVideosResponse:
        r"""Search for videos by a photographer
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v3/artists/videos"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetV3ArtistsVideosResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass

        return res

    