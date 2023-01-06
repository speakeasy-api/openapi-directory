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

type Downloads struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewDownloads(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Downloads {
	return &Downloads{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// GetV3Downloads - Returns information about a customer's downloaded assets.
// Returns information about a customer's previously downloaded assets.
//
// You'll need an API key and access token to use this resource.
//
// This endpoint requires being a Getty Images customer to limit your results to only assets that you have a license to use,
// you need to also include an authorization token in the header of your request.
// Please consult our [Authorization FAQ](http://developers.gettyimages.com/en/authorization-faq.html) for more information on authorization tokens.
func (s *Downloads) GetV3Downloads(ctx context.Context, request operations.GetV3DownloadsRequest) (*operations.GetV3DownloadsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/v3/downloads"

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

	res := &operations.GetV3DownloadsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GetDownloadsResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetDownloadsResponse = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 403:
	}

	return res, nil
}

// PostV3DownloadsImagesID - Download an image
// Use this endpoint to generate download URLs and related data for images you are authorized to download.
//
// Most product offerings have enforced periodic download limits such as monthly, weekly, and daily. When this operation executes, the count of allowed downloads is decremented by one for the product offering. Once the download limit is reached for a given product offering, no further downloads may be requested for that product offering until the next download period.
//
// The download limit for a given download period is covered in your product agreement established with Getty Images.
//
// You'll need an API key and a [Resource Owner Grant or Implicit Grant](http://developers.gettyimages.com/en/authorization-faq.html) access token to use this resource.
//
// ## Auto Downloads
// The `auto_download` request query parameter specifies whether to automatically download the image.
//
// If the `auto_download` request query parameter is set to _true_, the API will return an HTTP status code 303 *See Other*. Your client code will need to process this response and redirect to the URI specified in the *Location* header to enable you to automatically download the file. The redirection workflow follows the [HTTP 1.1 protocol](https://tools.ietf.org/html/rfc7231#section-6.4.4).
//
// Client Request:
//
// ```
// https://api.gettyimages.com/v3/downloads/images/[asset_id]?auto_download=true
// ```
//
// Server Response:
//
// ```
// HTTP/1.1 303 See Other
// Location: https://delivery.gettyimages.com/...
// ```
//
// If the `auto_download` request query parameter is set to false, the API will return a HTTP status code 200, along with the URI in the response body which can be used to download the image.
//
// Client Request:
//
// ```
// https://api.gettyimages.com/v3/downloads/images/[asset_id]?auto_download=false
// ```
//
// Server Response:
//
// ```
// HTTP/1.1 200 OK
//
//	{
//		"uri": "https://delivery.gettyimages.com/..."
//	}
//
// ```
// ## Downloading Via the Returned URI
//
// The URI returned by this call should be considered opaque and the format could change at any time.
// In order to get the filename, length or file type, the response headers must be inspected. An example
// response follows:
//
// ```
// content-length: 33959979
// content-type: image/jpeg
// content-disposition: attachment; filename=GettyImages-1167612765.jpg
// ```
//
// The `content-disposition` header must be parsed to get a usable filename.
//
// ## Download URI expiration
//
// Download URIs are _**only valid for 24 hours**_, starting from the moment they are returned from this call.
func (s *Downloads) PostV3DownloadsImagesID(ctx context.Context, request operations.PostV3DownloadsImagesIDRequest) (*operations.PostV3DownloadsImagesIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v3/downloads/images/{id}", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateHeaders(ctx, req, request.Headers)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostV3DownloadsImagesIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	case httpRes.StatusCode == 303:
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 404:
	}

	return res, nil
}

// PostV3DownloadsVideosID - Download a video
// Use this endpoint to generate download URLs and related data for videos you are authorized to download.
//
// Most product offerings have enforced periodic download limits such as monthly, weekly, and daily. When this operation executes, the count of allowed downloads is decremented by one for the product offering. Once the download limit is reached for a given product offering, no further downloads may be requested for that product offering until the next download period.
//
// The download limit for a given download period is covered in your product agreement established with Getty Images.
//
// You'll need an API key and a [Resource Owner Grant or Implicit Grant](http://developers.gettyimages.com/en/authorization-faq.html) access token to use this resource.
//
// ## Auto Downloads
// The `auto_download` request query parameter specifies whether to automatically download the video.
//
// If the `auto_download` request query parameter is set to _true_, the API will return an HTTP status code 303 *See Other*. Your client code will need to process this response and redirect to the URI specified in the *Location* header to enable you to automatically download the file. The redirection workflow follows the [HTTP 1.1 protocol](https://tools.ietf.org/html/rfc7231#section-6.4.4).
//
// Client Request:
//
// ```
// https://api.gettyimages.com/v3/downloads/videos/[asset_id]?auto_download=true
// ```
//
// Server Response:
//
// ```
// HTTP/1.1 303 See Other
// Location: https://delivery.gettyimages.com/...
// ```
//
// If the `auto_download` request query parameter is set to false, the API will return a HTTP status code 200, along with the URI in the response body which can be used to download the video.
//
// Client Request:
//
// ```
// https://api.gettyimages.com/v3/downloads/videos/[asset_id]?auto_download=false
// ```
//
// Server Response:
//
// ```
// HTTP/1.1 200 OK
//
//	{
//		"uri": "https://delivery.gettyimages.com/..."
//	}
//
// ```
//
// ## Downloading Via the Returned URI
//
// The URI returned by this call should be considered opaque and the format could change at any time.
// In order to get the filename, length or file type, the response headers must be inspected. An example
// response follows:
//
// ```
// content-length: 283925783
// content-type: video/quicktime
// content-disposition: attachment; filename=GettyImages-690773579.mov
// ```
//
// The `content-disposition` header must be parsed to get a usable filename.
//
// ## Download URI expiration
//
// Download URIs are _**only valid for 24 hours**_, starting from the moment they are returned from this call.
func (s *Downloads) PostV3DownloadsVideosID(ctx context.Context, request operations.PostV3DownloadsVideosIDRequest) (*operations.PostV3DownloadsVideosIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v3/downloads/videos/{id}", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateHeaders(ctx, req, request.Headers)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostV3DownloadsVideosIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	case httpRes.StatusCode == 303:
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 404:
	}

	return res, nil
}
