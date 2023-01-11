import requests
from typing import Optional
from sdk.models import operations
from . import utils

class MediaAsset:
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

    
    def get_media_assets(self, request: operations.GetMediaAssetsRequest) -> operations.GetMediaAssetsResponse:
        r"""Get a list of media assets
        A media asset is part of a collection of assets or files representing an image or a piece of audio content
        like an episode or an ad. Images, for example, have differently sized versions for better rendering performance,
        and a piece of audio content usually comes in different encoding formats.
        
        The `style` attribute of a media asset describes the role an asset plays in the context of the collection.
        The collection is what an asset is attached to (`attachment_id|type`).
        
        ## Styles for Images
        
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
        
        
        ## Styles for Audio
        
        - `medium`: A medium-quality version of the audio asset in various formats.
        - `original`: This is the original file provided. May not be available, depending on permissions
          and file type.
        - `waveform_data`: The generated BBC Audiowaveform data in JSON or binary format.
        
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/media_assets"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMediaAssetsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/vnd.api+json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetMediaAssets200ApplicationVndAPIPlusJSON])
                res.get_media_assets_200_application_vnd_api_plus_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/vnd.api+json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetMediaAssets400ApplicationVndAPIPlusJSON])
                res.get_media_assets_400_application_vnd_api_plus_json_object = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 406:
            pass
        elif r.status_code == 429:
            res.headers = r.headers
            

        return res

    
    def get_media_assets_id_(self, request: operations.GetMediaAssetsIDRequest) -> operations.GetMediaAssetsIDResponse:
        r"""Get a specific media asset
        A media asset is part of a collection of assets or files representing an image or a piece of audio content
        like an episode or an ad. Images, for example, have differently sized versions for better rendering performance,
        and a piece of audio content usually comes in different encoding formats.
        
        The `style` attribute of a media asset describes the role an asset plays in the context of the collection.
        The collection is what an asset is attached to (`attachment_id|type`).
        
        ## Styles for Images
        
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
        
        
        ## Styles for Audio
        
        - `medium`: A medium-quality version of the audio asset in various formats.
        - `original`: This is the original file provided. May not be available, depending on permissions
          and file type.
        - `waveform_data`: The generated BBC Audiowaveform data in JSON or binary format.
        
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/media_assets/{id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMediaAssetsIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/vnd.api+json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetMediaAssetsID200ApplicationVndAPIPlusJSON])
                res.get_media_assets_id_200_application_vnd_api_plus_json_object = out
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

    