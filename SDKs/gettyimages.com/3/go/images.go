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

type Images struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewImages(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Images {
	return &Images{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// GetV3Images - Get metadata for multiple images by supplying multiple image ids
// This endpoint returns the detailed image metadata for all specified images.
//
// You'll need an API key and access token to use this resource.
//
// ## Working with Fields Sets
//
// Fields sets are used in the **fields** request parameter to receive a suite of metadata fields. The following fields sets are available:
//
// #### Summary Fields Set
//
// The **summary_set** query string parameter fields value represents a small batch of metadata fields that are often used to build
// search response results. The following fields are provided for every image in your result set when you include **summary_set** in your request.
//
// ```
//
//	{
//	    "images":
//	    [
//	        "artist",
//	        "asset_family",
//	        "caption",
//	        "collection_code",
//	        "collection_id",
//	        "collection_name",
//	        "license_model",
//	        "max_dimensions",
//	        "title"
//	    ]
//	}
//
// ```
//
// #### Detail Fields Set
//
// The **detail_set** query string parameter fields value represents a large batch of metadata fields that are often used to build a
// detailed view of images. The following fields are provided for every image in your result set when you include **detail_set** in your request.
//
// ```
//
//	{
//	    "images":
//	    [
//	        "allowed_use",
//	        "artist",
//	        "artist_title",
//	        "asset_family",
//	        "call_for_image",
//	        "caption",
//	        "city",
//	        "collection_code",
//	        "collection_id",
//	        "collection_name",
//	        "color_type",
//	        "copyright",
//	        "country",
//	        "credit_line",
//	        "date_created",
//	        "date_submitted",
//	        "download_sizes",
//	        "editorial_segments",
//	        "event_ids",
//	        "graphical_style",
//	        "license_model",
//	        "max_dimensions",
//	        "orientation",
//	        "product_types",
//	        "quality_rank",
//	        "referral_destinations",
//	        "state_province",
//	        "title"
//	    ]
//	}
//
// ```
//
// #### Display Fields Set
//
// The **display_set** query string parameter fields value represents the fields that provide you with URLs for the low resolution
// files that are most frequently used to build a UI displaying search results. The following fields are provided for every image
// in your result set when you include **display_set** in your request.
//
// ```
//
//	{
//	    "images":
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
func (s *Images) GetV3Images(ctx context.Context, request operations.GetV3ImagesRequest) (*operations.GetV3ImagesResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/v3/images"

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

	res := &operations.GetV3ImagesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ImagesDetailResults
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ImagesDetailResults = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 500:
	}

	return res, nil
}

// GetV3ImagesID - Get metadata for a single image by supplying one image id
// This endpoint returns the detailed image metadata for a specified image.
//
// You'll need an API key and access token to use this resource.
//
// ## Working with Fields Sets
//
// Fields sets are used in the **fields** request parameter to receive a suite of metadata fields. The following fields sets are available:
//
// #### Summary Fields Set
//
// The **summary_set** query string parameter fields value represents a small batch of metadata fields that
// are often used to build search response results. The following fields are provided for every image in your
// result set when you include **summary_set** in your request.
//
// ```
//
//	{
//	    "images":
//	    [
//	        "artist",
//	        "asset_family",
//	        "caption",
//	        "collection_code",
//	        "collection_id",
//	        "collection_name",
//	        "license_model",
//	        "max_dimensions",
//	        "title"
//	    ]
//	}
//
// ```
//
// #### Detail Fields Set
//
// The **detail_set** query string parameter fields value represents a large batch of metadata fields that are
// often used to build a detailed view of images. The following fields are provided for every image in your
// result set when you include **detail_set** in your request.
//
// ```
//
//	{
//	    "images":
//	    [
//	        "allowed_use",
//	        "artist",
//	        "artist_title",
//	        "asset_family",
//	        "call_for_image",
//	        "caption",
//	        "city",
//	        "collection_code",
//	        "collection_id",
//	        "collection_name",
//	        "color_type",
//	        "copyright",
//	        "country",
//	        "credit_line",
//	        "date_created",
//	        "date_submitted",
//	        "download_sizes",
//	        "editorial_segments",
//	        "event_ids",
//	        "graphical_style",
//	        "license_model",
//	        "max_dimensions",
//	        "orientation",
//	        "product_types",
//	        "quality_rank",
//	        "referral_destinations",
//	        "state_province",
//	        "title"
//	    ]
//	}
//
// ```
//
// #### Display Fields Set
//
// The **display_set** query string parameter fields value represents the fields that provide you with URLs for the low
// resolution files that are most frequently used to build a UI displaying search results. The following fields are provided
// for every image in your result set when you include **display_set** in your request.
//
// ```
//
//	{
//	    "images":
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
func (s *Images) GetV3ImagesID(ctx context.Context, request operations.GetV3ImagesIDRequest) (*operations.GetV3ImagesIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v3/images/{id}", request.PathParams)

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

	res := &operations.GetV3ImagesIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ImagesDetailResults
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ImagesDetailResults = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 500:
	}

	return res, nil
}

// GetV3ImagesIDDownloadhistory - Returns information about a customer's download history for a specific asset
func (s *Images) GetV3ImagesIDDownloadhistory(ctx context.Context, request operations.GetV3ImagesIDDownloadhistoryRequest) (*operations.GetV3ImagesIDDownloadhistoryResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v3/images/{id}/downloadhistory", request.PathParams)

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

	res := &operations.GetV3ImagesIDDownloadhistoryResponse{
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

// GetV3ImagesIDSameSeries - Retrieve creative images from the same series
// This endpoint will provide the list of images, if any exist, from the same series as the specified creative asset id. These images are typically from the same photo shoot. This functionality will not work for editorial assets.
//
// You'll need an API key and access token to use this resource.
//
// ## Working with Fields Sets
//
// Fields sets are used in the **fields** request parameter to receive a suite of metadata fields. The following fields sets are available:
//
// #### Summary Fields Set
//
// The **summary_set** query string parameter fields value represents a small batch of metadata fields that are often used to build
// search response results. The following fields are provided for every image in your result set when you include **summary_set** in your request.
//
// ```
//
//	{
//	    "images":
//	    [
//	        "asset_family",
//	        "caption",
//	        "collection_code",
//	        "collection_id",
//	        "collection_name",
//	        "display_sizes":
//	        [
//	            {
//	                "name": "thumb"
//	            }
//	        ]
//	        "license_model",
//	        "max_dimensions",
//	        "title"
//	    ]
//	}
//
// ```
//
// #### Detail Fields Set
//
// The **detail_set** query string parameter fields value represents a large batch of metadata fields that are often used to build a
// detailed view of images. The following fields are provided for every image in your result set when you include **detail_set** in your request.
//
// ```
//
//	{
//	    "images":
//	    [
//	        "allowed_use",
//	        "artist",
//	        "asset_family",
//	        "call_for_image",
//	        "caption",
//	        "collection_code",
//	        "collection_id",
//	        "collection_name",
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
//	        "editorial_segments",
//	        "event_ids",
//	        "graphical_style",
//	        "license_model",
//	        "max_dimensions",
//	        "orientation",
//	        "product_types",
//	        "quality_rank",
//	        "referral_destinations",
//	        "title"
//	    ]
//	}
//
// ```
//
// #### Display Fields Set
//
// The **display_set** query string parameter fields value represents the fields that provide you with URLs for the low resolution files
// that are most frequently used to build a UI displaying search results. The following fields are provided for every image in your result
// set when you include **display_set** in your request.
//
// ```
//
//	{
//	    "images":
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
func (s *Images) GetV3ImagesIDSameSeries(ctx context.Context, request operations.GetV3ImagesIDSameSeriesRequest) (*operations.GetV3ImagesIDSameSeriesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v3/images/{id}/same-series", request.PathParams)

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

	res := &operations.GetV3ImagesIDSameSeriesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ImageSearchItemSearchResults
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ImageSearchItemSearchResults = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 500:
	}

	return res, nil
}

// GetV3ImagesIDSimilar - Retrieve similar images
// This endpoint will provide a list of images that are similar to the specified asset id.
//
// You'll need an API key and access token to use this resource.
//
// ## Working with Fields Sets
//
// Fields sets are used in the **fields** request parameter to receive a suite of metadata fields. The following fields sets are available:
//
// #### Summary Fields Set
//
// The **summary_set** query string parameter fields value represents a small batch of metadata fields that are often used to build
// search response results. The following fields are provided for every image in your result set when you include **summary_set** in your request.
//
// ```
//
//	{
//	    "images":
//	    [
//	        "asset_family",
//	        "caption",
//	        "collection_code",
//	        "collection_id",
//	        "collection_name",
//	        "display_sizes":
//	        [
//	            {
//	                "name": "thumb"
//	            }
//	        ]
//	        "license_model",
//	        "max_dimensions",
//	        "title"
//	    ]
//	}
//
// ```
//
// #### Detail Fields Set
//
// The **detail_set** query string parameter fields value represents a large batch of metadata fields that are often used to build a
// detailed view of images. The following fields are provided for every image in your result set when you include **detail_set** in your request.
//
// ```
//
//	{
//	    "images":
//	    [
//	        "allowed_use",
//	        "artist",
//	        "asset_family",
//	        "call_for_image",
//	        "caption",
//	        "collection_code",
//	        "collection_id",
//	        "collection_name",
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
//	        "editorial_segments",
//	        "event_ids",
//	        "graphical_style",
//	        "license_model",
//	        "max_dimensions",
//	        "orientation",
//	        "product_types",
//	        "quality_rank",
//	        "referral_destinations",
//	        "title"
//	    ]
//	}
//
// ```
//
// #### Display Fields Set
//
// The **display_set** query string parameter fields value represents the fields that provide you with URLs for the low resolution files
// that are most frequently used to build a UI displaying search results. The following fields are provided for every image in your result
// set when you include **display_set** in your request.
//
// ```
//
//	{
//	    "images":
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
func (s *Images) GetV3ImagesIDSimilar(ctx context.Context, request operations.GetV3ImagesIDSimilarRequest) (*operations.GetV3ImagesIDSimilarResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v3/images/{id}/similar", request.PathParams)

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

	res := &operations.GetV3ImagesIDSimilarResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ImageSearchItemSearchResults
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ImageSearchItemSearchResults = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 500:
	}

	return res, nil
}
