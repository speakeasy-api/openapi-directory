import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Images:
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

    
    def get_v3_images(self, request: operations.GetV3ImagesRequest) -> operations.GetV3ImagesResponse:
        r"""Get metadata for multiple images by supplying multiple image ids
        This endpoint returns the detailed image metadata for all specified images.
        
        You'll need an API key and access token to use this resource.
        
        ## Working with Fields Sets
        
        Fields sets are used in the **fields** request parameter to receive a suite of metadata fields. The following fields sets are available:
        
        #### Summary Fields Set
        
        The **summary_set** query string parameter fields value represents a small batch of metadata fields that are often used to build 
        search response results. The following fields are provided for every image in your result set when you include **summary_set** in your request.
        
        ```
        {
            \"images\":
            [
                \"artist\",
                \"asset_family\",
                \"caption\",
                \"collection_code\",
                \"collection_id\",
                \"collection_name\",
                \"license_model\",
                \"max_dimensions\",
                \"title\"
            ]
        }
        ```
        
        #### Detail Fields Set
        
        The **detail_set** query string parameter fields value represents a large batch of metadata fields that are often used to build a 
        detailed view of images. The following fields are provided for every image in your result set when you include **detail_set** in your request.
        
        ```
        {
            \"images\":
            [
                \"allowed_use\",
                \"artist\", 
                \"artist_title\", 
                \"asset_family\",
                \"call_for_image\",
                \"caption\", 
                \"city\",
                \"collection_code\",
                \"collection_id\", 
                \"collection_name\",
                \"color_type\", 
                \"copyright\", 
                \"country\", 
                \"credit_line\", 
                \"date_created\", 
                \"date_submitted\",
                \"download_sizes\", 
                \"editorial_segments\",
                \"event_ids\",
                \"graphical_style\",
                \"license_model\",
                \"max_dimensions\",
                \"orientation\",
                \"product_types\",
                \"quality_rank\",
                \"referral_destinations\",
                \"state_province\", 
                \"title\"
            ]
        }
        ```
        
        #### Display Fields Set
        
        The **display_set** query string parameter fields value represents the fields that provide you with URLs for the low resolution
        files that are most frequently used to build a UI displaying search results. The following fields are provided for every image 
        in your result set when you include **display_set** in your request.
        
        ```
        {
            \"images\":
            [
                \"display_sizes\": 
                [
                    {
                        \"name\": \"comp\"
                    },
                    {
                        \"name\": \"preview\"
                    },
                    {
                        \"name\": \"thumb\"
                    }
                ]
            ]
        }
        ```
        
        ## Request Usage Considerations
        
        - Specifying the \"entity_details\" response field can have significant performance implications. The field should be used only when necessary.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v3/images"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetV3ImagesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ImagesDetailResults])
                res.images_detail_results = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def get_v3_images_id_(self, request: operations.GetV3ImagesIDRequest) -> operations.GetV3ImagesIDResponse:
        r"""Get metadata for a single image by supplying one image id
        This endpoint returns the detailed image metadata for a specified image.
        
        You'll need an API key and access token to use this resource. 
         
        ## Working with Fields Sets
        
        Fields sets are used in the **fields** request parameter to receive a suite of metadata fields. The following fields sets are available:
        
        #### Summary Fields Set
        
        The **summary_set** query string parameter fields value represents a small batch of metadata fields that
        are often used to build search response results. The following fields are provided for every image in your
        result set when you include **summary_set** in your request.
        
        ```
        {
            \"images\":
            [
                \"artist\",
                \"asset_family\",
                \"caption\",
                \"collection_code\",
                \"collection_id\",
                \"collection_name\",
                \"license_model\",
                \"max_dimensions\",
                \"title\"
            ]
        }
        ```
        
        #### Detail Fields Set
        
        The **detail_set** query string parameter fields value represents a large batch of metadata fields that are 
        often used to build a detailed view of images. The following fields are provided for every image in your 
        result set when you include **detail_set** in your request.
        
        ```
        {
            \"images\":
            [
                \"allowed_use\",
                \"artist\", 
                \"artist_title\", 
                \"asset_family\",
                \"call_for_image\",
                \"caption\", 
                \"city\",
                \"collection_code\",
                \"collection_id\", 
                \"collection_name\",
                \"color_type\", 
                \"copyright\", 
                \"country\", 
                \"credit_line\", 
                \"date_created\", 
                \"date_submitted\",
                \"download_sizes\", 
                \"editorial_segments\",
                \"event_ids\",
                \"graphical_style\",
                \"license_model\",
                \"max_dimensions\",
                \"orientation\",
                \"product_types\",
                \"quality_rank\",
                \"referral_destinations\",
                \"state_province\", 
                \"title\"
            ]
        }
        ```
        
        #### Display Fields Set
        
        The **display_set** query string parameter fields value represents the fields that provide you with URLs for the low
        resolution files that are most frequently used to build a UI displaying search results. The following fields are provided 
        for every image in your result set when you include **display_set** in your request.
        
        ```
        {
            \"images\":
            [
                \"display_sizes\": 
                [
                    {
                        \"name\": \"comp\"
                    },
                    {
                        \"name\": \"preview\"
                    },
                    {
                        \"name\": \"thumb\"
                    }
                ]
            ]
        }
        ```
        
        ## Request Usage Considerations
        
        - Specifying the \"entity_details\" response field can have significant performance implications. The field should be used only when necessary.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/images/{id}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetV3ImagesIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ImagesDetailResults])
                res.images_detail_results = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def get_v3_images_id_downloadhistory(self, request: operations.GetV3ImagesIDDownloadhistoryRequest) -> operations.GetV3ImagesIDDownloadhistoryResponse:
        r"""Returns information about a customer's download history for a specific asset
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/images/{id}/downloadhistory", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetV3ImagesIDDownloadhistoryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AssetDownloadHistoryResults])
                res.asset_download_history_results = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def get_v3_images_id_same_series(self, request: operations.GetV3ImagesIDSameSeriesRequest) -> operations.GetV3ImagesIDSameSeriesResponse:
        r"""Retrieve creative images from the same series
        This endpoint will provide the list of images, if any exist, from the same series as the specified creative asset id. These images are typically from the same photo shoot. This functionality will not work for editorial assets.
        
        You'll need an API key and access token to use this resource.
        
        ## Working with Fields Sets
        
        Fields sets are used in the **fields** request parameter to receive a suite of metadata fields. The following fields sets are available:
        
        #### Summary Fields Set
        
        The **summary_set** query string parameter fields value represents a small batch of metadata fields that are often used to build
        search response results. The following fields are provided for every image in your result set when you include **summary_set** in your request.
        
        ```
        {
            \"images\":
            [
                \"asset_family\",
                \"caption\",
                \"collection_code\",
                \"collection_id\",
                \"collection_name\",
                \"display_sizes\": 
                [
                    {
                        \"name\": \"thumb\"
                    }
                ]
                \"license_model\",
                \"max_dimensions\",
                \"title\"
            ]
        }
        ```
        
        #### Detail Fields Set
        
        The **detail_set** query string parameter fields value represents a large batch of metadata fields that are often used to build a 
        detailed view of images. The following fields are provided for every image in your result set when you include **detail_set** in your request.
        
        ```
        {
            \"images\":
            [
                \"allowed_use\",
                \"artist\",
                \"asset_family\",
                \"call_for_image\",
                \"caption\",
                \"collection_code\",
                \"collection_id\",
                \"collection_name\",
                \"copyright\",
                \"date_created\",
                \"display_sizes\": 
                [
                    {
                        \"name\": \"comp\"
                    },
                    {
                        \"name\": \"preview\"
                    },
                    {
                        \"name\": \"thumb\"
                    }
                ],
                \"editorial_segments\",
                \"event_ids\",
                \"graphical_style\",
                \"license_model\",
                \"max_dimensions\",
                \"orientation\",
                \"product_types\",
                \"quality_rank\",
                \"referral_destinations\",
                \"title\"
            ]
        }
        ```
        
        #### Display Fields Set
        
        The **display_set** query string parameter fields value represents the fields that provide you with URLs for the low resolution files 
        that are most frequently used to build a UI displaying search results. The following fields are provided for every image in your result
        set when you include **display_set** in your request.
        
        ```
        {
            \"images\":
            [
                \"display_sizes\": 
                [
                    {
                        \"name\": \"comp\"
                    },
                    {
                        \"name\": \"preview\"
                    },
                    {
                        \"name\": \"thumb\"
                    }
                ]
            ]
        }
        ```
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/images/{id}/same-series", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetV3ImagesIDSameSeriesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ImageSearchItemSearchResults])
                res.image_search_item_search_results = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def get_v3_images_id_similar(self, request: operations.GetV3ImagesIDSimilarRequest) -> operations.GetV3ImagesIDSimilarResponse:
        r"""Retrieve similar images
        This endpoint will provide a list of images that are similar to the specified asset id.
        
        You'll need an API key and access token to use this resource.
        
        ## Working with Fields Sets
        
        Fields sets are used in the **fields** request parameter to receive a suite of metadata fields. The following fields sets are available:
        
        #### Summary Fields Set
        
        The **summary_set** query string parameter fields value represents a small batch of metadata fields that are often used to build
        search response results. The following fields are provided for every image in your result set when you include **summary_set** in your request.
        
        ```
        {
            \"images\":
            [
                \"asset_family\",
                \"caption\",
                \"collection_code\",
                \"collection_id\",
                \"collection_name\",
                \"display_sizes\": 
                [
                    {
                        \"name\": \"thumb\"
                    }
                ]
                \"license_model\",
                \"max_dimensions\",
                \"title\"
            ]
        }
        ```
        
        #### Detail Fields Set
        
        The **detail_set** query string parameter fields value represents a large batch of metadata fields that are often used to build a 
        detailed view of images. The following fields are provided for every image in your result set when you include **detail_set** in your request.
        
        ```
        {
            \"images\":
            [
                \"allowed_use\",
                \"artist\",
                \"asset_family\",
                \"call_for_image\",
                \"caption\",
                \"collection_code\",
                \"collection_id\",
                \"collection_name\",
                \"copyright\",
                \"date_created\",
                \"display_sizes\": 
                [
                    {
                        \"name\": \"comp\"
                    },
                    {
                        \"name\": \"preview\"
                    },
                    {
                        \"name\": \"thumb\"
                    }
                ],
                \"editorial_segments\",
                \"event_ids\",
                \"graphical_style\",
                \"license_model\",
                \"max_dimensions\",
                \"orientation\",
                \"product_types\",
                \"quality_rank\",
                \"referral_destinations\",
                \"title\"
            ]
        }
        ```
        
        #### Display Fields Set
        
        The **display_set** query string parameter fields value represents the fields that provide you with URLs for the low resolution files 
        that are most frequently used to build a UI displaying search results. The following fields are provided for every image in your result
        set when you include **display_set** in your request.
        
        ```
        {
            \"images\":
            [
                \"display_sizes\": 
                [
                    {
                        \"name\": \"comp\"
                    },
                    {
                        \"name\": \"preview\"
                    },
                    {
                        \"name\": \"thumb\"
                    }
                ]
            ]
        }
        ```
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/images/{id}/similar", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetV3ImagesIDSimilarResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ImageSearchItemSearchResults])
                res.image_search_item_search_results = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    