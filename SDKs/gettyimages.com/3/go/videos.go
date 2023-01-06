package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/utils"
	"strings"
)

type Videos struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewVideos(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Videos {
	return &Videos{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// GetV3Videos - Get metadata for multiple videos by supplying multiple video ids
// Use this endpoint to return detailed video metadata for all the specified video ids.
//
// You'll need an API key and access token to use this resource.
//
// You can show different information in the response by specifying values on the "fields" parameter (see details below).
// You can search with only an API key, and that will give you search results that are equivalent to doing a search on the GettyImages.com site without being logged in (anonymous search).  If you are a Getty Images API customer and would like to ensure that your API searches return only assets that you have a license to use, you need to also include an authorization token in the header of your request.  Please consult our [Authorization FAQ](http://developers.gettyimages.com/en/authorization-faq.html) for more information on authorization tokens, and our [Authorization Workflows](https://github.com/gettyimages/gettyimages-api/blob/master/OAuth2Workflow.md) for code examples of getting a token.
//
// ## Working with Fields Sets
//
// Fields sets are used in the **fields** request parameter to receive a suite of metadata fields. The following fields sets are available:
//
// #### Summary Fields Set
//
// The **summary_set** query string parameter fields value represents a small batch of metadata fields that are often used to build search response results. The following fields are provided for every video in your result set when you include **summary_set** in your request.
//
// ```
//
//	{
//	    "videos":
//	    [
//	        "asset_family",
//	        "caption",
//	        "collection_code",
//	        "collection_name",
//	        "display_sizes":
//	        [
//	            {
//	                "name": "comp"
//	            },
//	            {
//	                "name": "preview"
//	            },
//	            {
//	                "name": "thumb"
//	            }
//	        ],
//	        "license_model",
//	        "title"
//	    ]
//	}
//
// ```
//
// #### Detail Fields Set
//
// The **detail_set** query string parameter fields value represents a large batch of metadata fields that are often used to build a detailed view of videos. The following fields are provided for every video in your result set when you include **detail_set** in your request.
//
// ```
//
//	{
//	    "videos":
//	    [
//	        "allowed_use",
//	        "artist",
//	        "asset_family",
//			"call_for_image",
//	        "caption",
//	        "clip_length",
//	        "collection_code",
//	        "collection_id",
//	        "collection_name",
//	        "color_type",
//	        "copyright",
//	        "date_created",
//	        "display_sizes":
//	        [
//	            {
//	                "name": "comp"
//	            },
//	            {
//	                "name": "preview"
//	            },
//	            {
//	                "name": "thumb"
//	            }
//	        ],
//	        "download_sizes",
//	        "era",
//	        "event_ids",
//	        "license_model",
//	        "mastered_to",
//	        "originally_shot_on",
//	        "product_types",
//	        "quality_rank",
//	        "shot_speed",
//	        "source",
//	        "title"
//	    ]
//	}
//
// ```
//
// #### Display Fields Set
//
// The **display_set** query string parameter fields value represents the fields that provide you with URLs for the low resolution files that are most frequently used to build a UI displaying search results. The following fields are provided for every video in your result set when you include **display_set** in your request.
//
// ```
//
//	{
//	    "videos":
//	    [
//	        "display_sizes":
//	        [
//	            {
//	                "name": "comp"
//	            },
//	            {
//	                "name": "preview"
//	            },
//	            {
//	                "name": "thumb"
//	            }
//	        ]
//	    ]
//	}
//
// ```
//
// ## Request Usage Considerations
//
// - Specifying the "entity_details" response field can have significant performance implications. The field should be used only when necessary.
func (s *Videos) GetV3Videos(ctx context.Context, request operations.GetV3VideosRequest) (*operations.GetV3VideosResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/v3/videos"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetV3VideosResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 500:
	}

	return res, nil
}

// GetV3VideosID - Get metadata for a single video by supplying one video id
// Use this endpoint to return detailed video metadata for the specified video id.
//
// You'll need an API key and access token to use this resource.
//
// You can show different information in the response by specifying values on the "fields" parameter (see details below).
// You can search with only an API key, and that will give you search results that are equivalent to doing a search on the GettyImages.com site without being logged in (anonymous search).  If you are a Getty Images API customer and would like to ensure that your API searches return only assets that you have a license to use, you need to also include an authorization token in the header of your request.  Please consult our [Authorization FAQ](http://developers.gettyimages.com/en/authorization-faq.html) for more information on authorization tokens, and our [Authorization Workflows](https://github.com/gettyimages/gettyimages-api/blob/master/OAuth2Workflow.md) for code examples of getting a token.
//
// ## Working with Fields Sets
//
// Fields sets are used in the **fields** request parameter to receive a suite of metadata fields. The following fields sets are available:
//
// #### Summary Fields Set
//
// The **summary_set** query string parameter fields value represents a small batch of metadata fields that are often used to build search response results. The following fields are provided for every video in your result set when you include **summary_set** in your request.
//
// ```
//
//	{
//	    "videos":
//	    [
//	        "asset_family",
//	        "caption",
//	        "collection_code",
//	        "collection_name",
//	        "display_sizes":
//	        [
//	            {
//	                "name": "comp"
//	            },
//	            {
//	                "name": "preview"
//	            },
//	            {
//	                "name": "thumb"
//	            }
//	        ],
//	        "license_model",
//	        "title"
//	    ]
//	}
//
// ```
//
// #### Detail Fields Set
//
// The **detail_set** query string parameter fields value represents a large batch of metadata fields that are often used to build a detailed view of videos. The following fields are provided for every video in your result set when you include **detail_set** in your request.
//
// ```
//
//	{
//	    "videos":
//	    [
//	        "allowed_use",
//	        "artist",
//	        "asset_family",
//			"call_for_image",
//	        "caption",
//	        "clip_length",
//	        "collection_code",
//	        "collection_id",
//	        "collection_name",
//	        "color_type",
//	        "copyright",
//	        "date_created",
//	        "display_sizes":
//	        [
//	            {
//	                "name": "comp"
//	            },
//	            {
//	                "name": "preview"
//	            },
//	            {
//	                "name": "thumb"
//	            }
//	        ],
//	        "download_sizes",
//	        "era",
//	        "event_ids",
//	        "license_model",
//	        "mastered_to",
//	        "originally_shot_on",
//	        "product_types",
//	        "quality_rank",
//	        "shot_speed",
//	        "source",
//	        "title"
//	    ]
//	}
//
// ```
//
// #### Display Fields Set
//
// The **display_set** query string parameter fields value represents the fields that provide you with URLs for the low resolution files that are most frequently used to build a UI displaying search results. The following fields are provided for every video in your result set when you include **display_set** in your request.
//
// ```
//
//	{
//	    "videos":
//	    [
//	        "display_sizes":
//	        [
//	            {
//	                "name": "comp"
//	            },
//	            {
//	                "name": "preview"
//	            },
//	            {
//	                "name": "thumb"
//	            }
//	        ]
//	    ]
//	}
//
// ```
//
// ## Request Usage Considerations
//
// - Specifying the "entity_details" response field can have significant performance implications. The field should be used only when necessary.
func (s *Videos) GetV3VideosID(ctx context.Context, request operations.GetV3VideosIDRequest) (*operations.GetV3VideosIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v3/videos/{id}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetV3VideosIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 500:
	}

	return res, nil
}

// GetV3VideosIDDownloadhistory - Returns information about a customer's download history for a specific asset
func (s *Videos) GetV3VideosIDDownloadhistory(ctx context.Context, request operations.GetV3VideosIDDownloadhistoryRequest) (*operations.GetV3VideosIDDownloadhistoryResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v3/videos/{id}/downloadhistory", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetV3VideosIDDownloadhistoryResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.AssetDownloadHistoryResults
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.AssetDownloadHistoryResults = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 500:
	}

	return res, nil
}

// GetV3VideosIDSameSeries - Retrieve creative videos from the same series
// This endpoint will provide the list of videos, if any exist, from the same series as the specified creative asset id. These images are typically from the same photo shoot. This functionality will not work for editorial assets.
//
// You'll need an API key and access token to use this resource.
//
// ## Working with Fields Sets
//
// Fields sets are used in the **fields** request parameter to receive a suite of metadata fields. The following fields sets are available:
//
// #### Summary Fields Set
//
// The **summary_set** query string parameter fields value represents a small batch of metadata fields that are often used to build search response results. The following fields are provided for every video in your result set when you include **summary_set** in your request.
//
// ```
//
//	{
//	    "videos":
//	    [
//	        "asset_family",
//	        "caption",
//	        "collection_code",
//	        "collection_name",
//	        "display_sizes":
//	        [
//	            {
//	                "name": "comp"
//	            },
//	            {
//	                "name": "preview"
//	            },
//	            {
//	                "name": "thumb"
//	            }
//	        ],
//	        "license_model",
//	        "title"
//	    ]
//	}
//
// ```
//
// #### Detail Fields Set
//
// The **detail_set** query string parameter fields value represents a large batch of metadata fields that are often used to build a detailed view of videos. The following fields are provided for every video in your result set when you include **detail_set** in your request.
//
// ```
//
//	{
//	    "videos":
//	    [
//	        "allowed_use",
//	        "artist",
//	        "asset_family",
//			"call_for_image",
//	        "caption",
//	        "clip_length",
//	        "collection_code",
//	        "collection_id",
//	        "collection_name",
//	        "color_type",
//	        "copyright",
//	        "date_created",
//	        "display_sizes":
//	        [
//	            {
//	                "name": "comp"
//	            },
//	            {
//	                "name": "preview"
//	            },
//	            {
//	                "name": "thumb"
//	            }
//	        ],
//	        "download_sizes",
//	        "era",
//	        "license_model",
//	        "mastered_to",
//	        "originally_shot_on",
//	        "product_types",
//	        "quality_rank",
//	        "shot_speed",
//	        "source",
//	        "title"
//	    ]
//	}
//
// ```
//
// #### Display Fields Set
//
// The **display_set** query string parameter fields value represents the fields that provide you with URLs for the low resolution files that are most frequently used to build a UI displaying search results. The following fields are provided for every video in your result set when you include **display_set** in your request.
//
// ```
//
//	{
//	    "videos":
//	    [
//	        "display_sizes":
//	        [
//	            {
//	                "name": "comp"
//	            },
//	            {
//	                "name": "preview"
//	            },
//	            {
//	                "name": "thumb"
//	            }
//	        ]
//	    ]
//	}
//
// ```
func (s *Videos) GetV3VideosIDSameSeries(ctx context.Context, request operations.GetV3VideosIDSameSeriesRequest) (*operations.GetV3VideosIDSameSeriesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v3/videos/{id}/same-series", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetV3VideosIDSameSeriesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 500:
	}

	return res, nil
}

// GetV3VideosIDSimilar - Retrieve similar videos
// This endpoint will provide a list of videos that are similar to the specified asset id.
//
// You'll need an API key and access token to use this resource.
//
// ## Working with Fields Sets
//
// Fields sets are used in the **fields** request parameter to receive a suite of metadata fields. The following fields sets are available:
//
// #### Summary Fields Set
//
// The **summary_set** query string parameter fields value represents a small batch of metadata fields that are often used to build search response results. The following fields are provided for every video in your result set when you include **summary_set** in your request.
//
// ```
//
//	{
//	    "videos":
//	    [
//	        "asset_family",
//	        "caption",
//	        "collection_code",
//	        "collection_name",
//	        "display_sizes":
//	        [
//	            {
//	                "name": "comp"
//	            },
//	            {
//	                "name": "preview"
//	            },
//	            {
//	                "name": "thumb"
//	            }
//	        ],
//	        "license_model",
//	        "title"
//	    ]
//	}
//
// ```
//
// #### Detail Fields Set
//
// The **detail_set** query string parameter fields value represents a large batch of metadata fields that are often used to build a detailed view of videos. The following fields are provided for every video in your result set when you include **detail_set** in your request.
//
// ```
//
//	{
//	    "videos":
//	    [
//	        "allowed_use",
//	        "artist",
//	        "asset_family",
//			"call_for_image",
//	        "caption",
//	        "clip_length",
//	        "collection_code",
//	        "collection_id",
//	        "collection_name",
//	        "color_type",
//	        "copyright",
//	        "date_created",
//	        "display_sizes":
//	        [
//	            {
//	                "name": "comp"
//	            },
//	            {
//	                "name": "preview"
//	            },
//	            {
//	                "name": "thumb"
//	            }
//	        ],
//	        "download_sizes",
//	        "era",
//	        "event_ids",
//	        "license_model",
//	        "mastered_to",
//	        "originally_shot_on",
//	        "product_types",
//	        "quality_rank",
//	        "shot_speed",
//	        "source",
//	        "title"
//	    ]
//	}
//
// ```
//
// #### Display Fields Set
//
// The **display_set** query string parameter fields value represents the fields that provide you with URLs for the low resolution files that are most frequently used to build a UI displaying search results. The following fields are provided for every video in your result set when you include **display_set** in your request.
//
// ```
//
//	{
//	    "videos":
//	    [
//	        "display_sizes":
//	        [
//	            {
//	                "name": "comp"
//	            },
//	            {
//	                "name": "preview"
//	            },
//	            {
//	                "name": "thumb"
//	            }
//	        ]
//	    ]
//	}
//
// ```
func (s *Videos) GetV3VideosIDSimilar(ctx context.Context, request operations.GetV3VideosIDSimilarRequest) (*operations.GetV3VideosIDSimilarResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v3/videos/{id}/similar", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetV3VideosIDSimilarResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 500:
	}

	return res, nil
}
