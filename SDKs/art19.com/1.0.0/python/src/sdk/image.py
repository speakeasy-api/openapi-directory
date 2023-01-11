import requests
from typing import Optional
from sdk.models import operations
from . import utils

class Image:
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

    
    def get_images(self, request: operations.GetImagesRequest) -> operations.GetImagesResponse:
        r"""Get a list of images
        An image represents a piece of artwork attached to some entity like a series, season, or episode,
        and is _owned_ by an entity called the `bucket`.
        An image is also a container for several `MediaAssets` representing the physical files for various
        styles used.
        
        ## Media Asset Styles for Images
        
        Most media assets use square images. You may upload and use a square image, or upload an image of any
        shape and crop it to a square by specifying the cropping area. This area – identified by a coordinate
        `x, y` and a `width` & `height` – is the portion of the image used for all cover art. If an image has
        cropping defined, the cropped version of the image will be used in any `regular` or `square` style of media
        asset. If the original file is rectangular and does not have cropping, then the system will use a squared
        version of the original file with the smaller of width or height as the square size.
        
        The original image as uploaded into the system is always retained unmodified and available through
        the style `original`. All media asset styles except `stripped-original` consist of the cropped image.
        
        An image has media assets with the following styles:
        
        - `original`: This is the original file provided. May not be available, depending on permissions
          and file type.
        - `stripped-original`: The original file with all metadata (EXIF, XMP, PNG metadata, etc.) removed.
          This should be used for any application needing the original, uncropped, image.
        - `regular`: If the image has cropping defined, this is the cropped image.
          If not, this is a square version of the original.
        - `thumb`: A square thumbnail of the image with a size of `100x100` pixels.
        - `square-400`: A square version of the image with a size of `400x400` pixels.
        - `square-640`: A square version of the image with a size of `640x640` pixels.
        - `square-888`: A square version of the image with a size of `888x888` pixels.
        - `square-3000`: A square version of the image with a size of `3000x3000` pixels.
          This variant is only created if the cropped width & height are each at least 3000.
        - `itunes`: A square version of the image with a size of `1400x1400` pixels.
        
        ### Preferred image used in feeds
        
        For the main series image used in feeds, it is ideal to use the `square-3000` version.
        If that is not available, the `itunes` version should be used instead.
        
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/images"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetImagesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/vnd.api+json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetImages200ApplicationVndAPIPlusJSON])
                res.get_images_200_application_vnd_api_plus_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/vnd.api+json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetImages400ApplicationVndAPIPlusJSON])
                res.get_images_400_application_vnd_api_plus_json_object = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 406:
            pass
        elif r.status_code == 429:
            res.headers = r.headers
            

        return res

    
    def get_images_id_(self, request: operations.GetImagesIDRequest) -> operations.GetImagesIDResponse:
        r"""Get a specific image
        An image represents a piece of artwork attached to some entity like a series, season, or episode,
        and is _owned_ by an entity called the `bucket`.
        An image is also a container for several `MediaAssets` representing the physical files for various
        styles used.
        
        ## Media Asset Styles for Images
        
        Most media assets use square images. You may upload and use a square image, or upload an image of any
        shape and crop it to a square by specifying the cropping area. This area – identified by a coordinate
        `x, y` and a `width` & `height` – is the portion of the image used for all cover art. If an image has
        cropping defined, the cropped version of the image will be used in any `regular` or `square` style of media
        asset. If the original file is rectangular and does not have cropping, then the system will use a squared
        version of the original file with the smaller of width or height as the square size.
        
        The original image as uploaded into the system is always retained unmodified and available through
        the style `original`. All media asset styles except `stripped-original` consist of the cropped image.
        
        An image has media assets with the following styles:
        
        - `original`: This is the original file provided. May not be available, depending on permissions
          and file type.
        - `stripped-original`: The original file with all metadata (EXIF, XMP, PNG metadata, etc.) removed.
          This should be used for any application needing the original, uncropped, image.
        - `regular`: If the image has cropping defined, this is the cropped image.
          If not, this is a square version of the original.
        - `thumb`: A square thumbnail of the image with a size of `100x100` pixels.
        - `square-400`: A square version of the image with a size of `400x400` pixels.
        - `square-640`: A square version of the image with a size of `640x640` pixels.
        - `square-888`: A square version of the image with a size of `888x888` pixels.
        - `square-3000`: A square version of the image with a size of `3000x3000` pixels.
          This variant is only created if the cropped width & height are each at least 3000.
        - `itunes`: A square version of the image with a size of `1400x1400` pixels.
        
        ### Preferred image used in feeds
        
        For the main series image used in feeds, it is ideal to use the `square-3000` version.
        If that is not available, the `itunes` version should be used instead.
        
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/images/{id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetImagesIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/vnd.api+json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetImagesID200ApplicationVndAPIPlusJSON])
                res.get_images_id_200_application_vnd_api_plus_json_object = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 406:
            pass
        elif r.status_code == 429:
            res.headers = r.headers
            

        return res

    