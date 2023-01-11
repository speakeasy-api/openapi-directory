import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Downloads:
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

    
    def get_v3_downloads(self, request: operations.GetV3DownloadsRequest) -> operations.GetV3DownloadsResponse:
        r"""Returns information about a customer's downloaded assets.
        Returns information about a customer's previously downloaded assets.
        
        You'll need an API key and access token to use this resource.
         
        	
        This endpoint requires being a Getty Images customer to limit your results to only assets that you have a license to use, 
        you need to also include an authorization token in the header of your request. 
        Please consult our [Authorization FAQ](http://developers.gettyimages.com/en/authorization-faq.html) for more information on authorization tokens.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v3/downloads"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetV3DownloadsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetDownloadsResponse])
                res.get_downloads_response = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def post_v3_downloads_images_id_(self, request: operations.PostV3DownloadsImagesIDRequest) -> operations.PostV3DownloadsImagesIDResponse:
        r"""Download an image
        Use this endpoint to generate download URLs and related data for images you are authorized to download.
        
        Most product offerings have enforced periodic download limits such as monthly, weekly, and daily. When this operation executes, the count of allowed downloads is decremented by one for the product offering. Once the download limit is reached for a given product offering, no further downloads may be requested for that product offering until the next download period.
        
        The download limit for a given download period is covered in your product agreement established with Getty Images.
        
        You'll need an API key and a [Resource Owner Grant or Implicit Grant](http://developers.gettyimages.com/en/authorization-faq.html) access token to use this resource.
        
        ## Auto Downloads
        The `auto_download` request query parameter specifies whether to automatically download the image.
        
        If the `auto_download` request query parameter is set to _true_, the API will return an HTTP status code 303 *See Other*. Your client code will need to process this response and redirect to the URI specified in the *Location* header to enable you to automatically download the file. The redirection workflow follows the [HTTP 1.1 protocol](https://tools.ietf.org/html/rfc7231#section-6.4.4).
        
        Client Request:
        
        ```
        https://api.gettyimages.com/v3/downloads/images/[asset_id]?auto_download=true
        ```
        
        Server Response:
        
        ```
        HTTP/1.1 303 See Other
        Location: https://delivery.gettyimages.com/...
        ```
        
        If the `auto_download` request query parameter is set to false, the API will return a HTTP status code 200, along with the URI in the response body which can be used to download the image. 
        
        Client Request:
        
        ```
        https://api.gettyimages.com/v3/downloads/images/[asset_id]?auto_download=false
        ```
        
        Server Response:
        
        ```
        HTTP/1.1 200 OK
        {
        	\"uri\": \"https://delivery.gettyimages.com/...\"
        }
        ```
        ## Downloading Via the Returned URI
        
        The URI returned by this call should be considered opaque and the format could change at any time.
        In order to get the filename, length or file type, the response headers must be inspected. An example
        response follows:
        
        ```
        content-length: 33959979
        content-type: image/jpeg
        content-disposition: attachment; filename=GettyImages-1167612765.jpg
        ```
        
        The `content-disposition` header must be parsed to get a usable filename.
        
        ## Download URI expiration
        
        Download URIs are _**only valid for 24 hours**_, starting from the moment they are returned from this call.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/downloads/images/{id}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostV3DownloadsImagesIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 303:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def post_v3_downloads_videos_id_(self, request: operations.PostV3DownloadsVideosIDRequest) -> operations.PostV3DownloadsVideosIDResponse:
        r"""Download a video
        Use this endpoint to generate download URLs and related data for videos you are authorized to download.
        
        Most product offerings have enforced periodic download limits such as monthly, weekly, and daily. When this operation executes, the count of allowed downloads is decremented by one for the product offering. Once the download limit is reached for a given product offering, no further downloads may be requested for that product offering until the next download period.
        
        The download limit for a given download period is covered in your product agreement established with Getty Images.
        
        You'll need an API key and a [Resource Owner Grant or Implicit Grant](http://developers.gettyimages.com/en/authorization-faq.html) access token to use this resource.
        
        ## Auto Downloads
        The `auto_download` request query parameter specifies whether to automatically download the video.
        
        If the `auto_download` request query parameter is set to _true_, the API will return an HTTP status code 303 *See Other*. Your client code will need to process this response and redirect to the URI specified in the *Location* header to enable you to automatically download the file. The redirection workflow follows the [HTTP 1.1 protocol](https://tools.ietf.org/html/rfc7231#section-6.4.4).
        
        Client Request:
        
        ```
        https://api.gettyimages.com/v3/downloads/videos/[asset_id]?auto_download=true
        ```
        
        Server Response:
        
        ```
        HTTP/1.1 303 See Other
        Location: https://delivery.gettyimages.com/...
        ```
        
        If the `auto_download` request query parameter is set to false, the API will return a HTTP status code 200, along with the URI in the response body which can be used to download the video. 
        
        Client Request:
        
        ```
        https://api.gettyimages.com/v3/downloads/videos/[asset_id]?auto_download=false
        ```
        
        Server Response:
        
        ```
        HTTP/1.1 200 OK
        {
        	\"uri\": \"https://delivery.gettyimages.com/...\"
        }
        ```
        
        ## Downloading Via the Returned URI
        
        The URI returned by this call should be considered opaque and the format could change at any time.
        In order to get the filename, length or file type, the response headers must be inspected. An example
        response follows:
        
        ```
        content-length: 283925783
        content-type: video/quicktime
        content-disposition: attachment; filename=GettyImages-690773579.mov
        ```
        
        The `content-disposition` header must be parsed to get a usable filename.
        
        ## Download URI expiration
        
        Download URIs are _**only valid for 24 hours**_, starting from the moment they are returned from this call.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/downloads/videos/{id}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostV3DownloadsVideosIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 303:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    