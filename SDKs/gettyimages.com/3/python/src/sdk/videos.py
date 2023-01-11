import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Videos:
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

    
    def get_v3_videos(self, request: operations.GetV3VideosRequest) -> operations.GetV3VideosResponse:
        r"""Get metadata for multiple videos by supplying multiple video ids
        Use this endpoint to return detailed video metadata for all the specified video ids.
        
        You'll need an API key and access token to use this resource.
        
        You can show different information in the response by specifying values on the \"fields\" parameter (see details below).
        You can search with only an API key, and that will give you search results that are equivalent to doing a search on the GettyImages.com site without being logged in (anonymous search).  If you are a Getty Images API customer and would like to ensure that your API searches return only assets that you have a license to use, you need to also include an authorization token in the header of your request.  Please consult our [Authorization FAQ](http://developers.gettyimages.com/en/authorization-faq.html) for more information on authorization tokens, and our [Authorization Workflows](https://github.com/gettyimages/gettyimages-api/blob/master/OAuth2Workflow.md) for code examples of getting a token.
        
        ## Working with Fields Sets
        
        Fields sets are used in the **fields** request parameter to receive a suite of metadata fields. The following fields sets are available:
        
        #### Summary Fields Set
        
        The **summary_set** query string parameter fields value represents a small batch of metadata fields that are often used to build search response results. The following fields are provided for every video in your result set when you include **summary_set** in your request.
        
        ```
        {
            \"videos\": 
            [
                \"asset_family\",
                \"caption\",
                \"collection_code\",
                \"collection_name\",
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
                \"license_model\",
                \"title\"
            ]
        }
        ```
        
        #### Detail Fields Set
        
        The **detail_set** query string parameter fields value represents a large batch of metadata fields that are often used to build a detailed view of videos. The following fields are provided for every video in your result set when you include **detail_set** in your request.
        
        ```
        {
            \"videos\": 
            [
                \"allowed_use\",
                \"artist\",
                \"asset_family\",
        		\"call_for_image\",
                \"caption\",
                \"clip_length\",
                \"collection_code\",
                \"collection_id\",
                \"collection_name\",
                \"color_type\",
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
                \"download_sizes\",
                \"era\",
                \"event_ids\",
                \"license_model\",
                \"mastered_to\",
                \"originally_shot_on\",
                \"product_types\",
                \"quality_rank\",
                \"shot_speed\",
                \"source\",
                \"title\"
            ]
        }
        ```
        
        #### Display Fields Set
        
        The **display_set** query string parameter fields value represents the fields that provide you with URLs for the low resolution files that are most frequently used to build a UI displaying search results. The following fields are provided for every video in your result set when you include **display_set** in your request.
        
        ```
        {
            \"videos\":
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
        
        url = base_url.removesuffix("/") + "/v3/videos"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetV3VideosResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
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

    
    def get_v3_videos_id_(self, request: operations.GetV3VideosIDRequest) -> operations.GetV3VideosIDResponse:
        r"""Get metadata for a single video by supplying one video id
        Use this endpoint to return detailed video metadata for the specified video id.
        
        You'll need an API key and access token to use this resource.
        
        You can show different information in the response by specifying values on the \"fields\" parameter (see details below).
        You can search with only an API key, and that will give you search results that are equivalent to doing a search on the GettyImages.com site without being logged in (anonymous search).  If you are a Getty Images API customer and would like to ensure that your API searches return only assets that you have a license to use, you need to also include an authorization token in the header of your request.  Please consult our [Authorization FAQ](http://developers.gettyimages.com/en/authorization-faq.html) for more information on authorization tokens, and our [Authorization Workflows](https://github.com/gettyimages/gettyimages-api/blob/master/OAuth2Workflow.md) for code examples of getting a token.
        
        ## Working with Fields Sets
        
        Fields sets are used in the **fields** request parameter to receive a suite of metadata fields. The following fields sets are available:
        
        #### Summary Fields Set
        
        The **summary_set** query string parameter fields value represents a small batch of metadata fields that are often used to build search response results. The following fields are provided for every video in your result set when you include **summary_set** in your request.
        
        ```
        {
            \"videos\":
            [
                \"asset_family\",
                \"caption\",
                \"collection_code\",
                \"collection_name\",
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
                \"license_model\",
                \"title\"
            ]
        }
        ```
        
        #### Detail Fields Set
        
        The **detail_set** query string parameter fields value represents a large batch of metadata fields that are often used to build a detailed view of videos. The following fields are provided for every video in your result set when you include **detail_set** in your request.
        
        ```
        {
            \"videos\":
            [
                \"allowed_use\",
                \"artist\",
                \"asset_family\",
        		\"call_for_image\",
                \"caption\",
                \"clip_length\",
                \"collection_code\",
                \"collection_id\",
                \"collection_name\",
                \"color_type\",
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
                \"download_sizes\",
                \"era\",
                \"event_ids\",
                \"license_model\",
                \"mastered_to\",
                \"originally_shot_on\",
                \"product_types\",
                \"quality_rank\",
                \"shot_speed\",
                \"source\",
                \"title\"
            ]
        }
        ```
        
        #### Display Fields Set
        
        The **display_set** query string parameter fields value represents the fields that provide you with URLs for the low resolution files that are most frequently used to build a UI displaying search results. The following fields are provided for every video in your result set when you include **display_set** in your request.
        
        ```
        {
            \"videos\":
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
        
        url = utils.generate_url(base_url, "/v3/videos/{id}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetV3VideosIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
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

    
    def get_v3_videos_id_downloadhistory(self, request: operations.GetV3VideosIDDownloadhistoryRequest) -> operations.GetV3VideosIDDownloadhistoryResponse:
        r"""Returns information about a customer's download history for a specific asset
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/videos/{id}/downloadhistory", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetV3VideosIDDownloadhistoryResponse(status_code=r.status_code, content_type=content_type)
        
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

    
    def get_v3_videos_id_same_series(self, request: operations.GetV3VideosIDSameSeriesRequest) -> operations.GetV3VideosIDSameSeriesResponse:
        r"""Retrieve creative videos from the same series
        This endpoint will provide the list of videos, if any exist, from the same series as the specified creative asset id. These images are typically from the same photo shoot. This functionality will not work for editorial assets.
        
        You'll need an API key and access token to use this resource.
        
        ## Working with Fields Sets
        
        Fields sets are used in the **fields** request parameter to receive a suite of metadata fields. The following fields sets are available:
        
        #### Summary Fields Set
        
        The **summary_set** query string parameter fields value represents a small batch of metadata fields that are often used to build search response results. The following fields are provided for every video in your result set when you include **summary_set** in your request.
        
        ```
        {
            \"videos\":
            [
                \"asset_family\",
                \"caption\",
                \"collection_code\",
                \"collection_name\",
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
                \"license_model\",
                \"title\"
            ]
        }
        ```
        
        #### Detail Fields Set
        
        The **detail_set** query string parameter fields value represents a large batch of metadata fields that are often used to build a detailed view of videos. The following fields are provided for every video in your result set when you include **detail_set** in your request.
        
        ```
        {
            \"videos\":
            [
                \"allowed_use\",
                \"artist\",
                \"asset_family\",
        		\"call_for_image\",
                \"caption\",
                \"clip_length\",
                \"collection_code\",
                \"collection_id\",
                \"collection_name\",
                \"color_type\",
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
                \"download_sizes\",
                \"era\",
                \"license_model\",
                \"mastered_to\",
                \"originally_shot_on\",
                \"product_types\",
                \"quality_rank\",
                \"shot_speed\",
                \"source\",
                \"title\"
            ]
        }
        ```
        
        #### Display Fields Set
        
        The **display_set** query string parameter fields value represents the fields that provide you with URLs for the low resolution files that are most frequently used to build a UI displaying search results. The following fields are provided for every video in your result set when you include **display_set** in your request.
        
        ```
        {
            \"videos\":
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
        
        url = utils.generate_url(base_url, "/v3/videos/{id}/same-series", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetV3VideosIDSameSeriesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
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

    
    def get_v3_videos_id_similar(self, request: operations.GetV3VideosIDSimilarRequest) -> operations.GetV3VideosIDSimilarResponse:
        r"""Retrieve similar videos
        This endpoint will provide a list of videos that are similar to the specified asset id.
        
        You'll need an API key and access token to use this resource.
        
        ## Working with Fields Sets
        
        Fields sets are used in the **fields** request parameter to receive a suite of metadata fields. The following fields sets are available:
        
        #### Summary Fields Set
        
        The **summary_set** query string parameter fields value represents a small batch of metadata fields that are often used to build search response results. The following fields are provided for every video in your result set when you include **summary_set** in your request.
        
        ```
        {
            \"videos\": 
            [
                \"asset_family\",
                \"caption\",
                \"collection_code\",
                \"collection_name\",
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
                \"license_model\",
                \"title\"
            ]
        }
        ```
        
        #### Detail Fields Set
        
        The **detail_set** query string parameter fields value represents a large batch of metadata fields that are often used to build a detailed view of videos. The following fields are provided for every video in your result set when you include **detail_set** in your request.
        
        ```
        {
            \"videos\": 
            [
                \"allowed_use\",
                \"artist\",
                \"asset_family\",
        		\"call_for_image\",
                \"caption\",
                \"clip_length\",
                \"collection_code\",
                \"collection_id\",
                \"collection_name\",
                \"color_type\",
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
                \"download_sizes\",
                \"era\",
                \"event_ids\",
                \"license_model\",
                \"mastered_to\",
                \"originally_shot_on\",
                \"product_types\",
                \"quality_rank\",
                \"shot_speed\",
                \"source\",
                \"title\"
            ]
        }
        ```
        
        #### Display Fields Set
        
        The **display_set** query string parameter fields value represents the fields that provide you with URLs for the low resolution files that are most frequently used to build a UI displaying search results. The following fields are provided for every video in your result set when you include **display_set** in your request.
        
        ```
        {
            \"videos\":
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
        
        url = utils.generate_url(base_url, "/v3/videos/{id}/similar", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetV3VideosIDSimilarResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
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

    