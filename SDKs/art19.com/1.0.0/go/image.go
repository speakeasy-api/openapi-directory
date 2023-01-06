package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/pkg/models/operations"
	"openapi/pkg/utils"
	"strings"
)

type Image struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewImage(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Image {
	return &Image{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// GetImages - Get a list of images
// An image represents a piece of artwork attached to some entity like a series, season, or episode,
// and is _owned_ by an entity called the `bucket`.
// An image is also a container for several `MediaAssets` representing the physical files for various
// styles used.
//
// ## Media Asset Styles for Images
//
// Most media assets use square images. You may upload and use a square image, or upload an image of any
// shape and crop it to a square by specifying the cropping area. This area – identified by a coordinate
// `x, y` and a `width` & `height` – is the portion of the image used for all cover art. If an image has
// cropping defined, the cropped version of the image will be used in any `regular` or `square` style of media
// asset. If the original file is rectangular and does not have cropping, then the system will use a squared
// version of the original file with the smaller of width or height as the square size.
//
// The original image as uploaded into the system is always retained unmodified and available through
// the style `original`. All media asset styles except `stripped-original` consist of the cropped image.
//
// An image has media assets with the following styles:
//
//   - `original`: This is the original file provided. May not be available, depending on permissions
//     and file type.
//   - `stripped-original`: The original file with all metadata (EXIF, XMP, PNG metadata, etc.) removed.
//     This should be used for any application needing the original, uncropped, image.
//   - `regular`: If the image has cropping defined, this is the cropped image.
//     If not, this is a square version of the original.
//   - `thumb`: A square thumbnail of the image with a size of `100x100` pixels.
//   - `square-400`: A square version of the image with a size of `400x400` pixels.
//   - `square-640`: A square version of the image with a size of `640x640` pixels.
//   - `square-888`: A square version of the image with a size of `888x888` pixels.
//   - `square-3000`: A square version of the image with a size of `3000x3000` pixels.
//     This variant is only created if the cropped width & height are each at least 3000.
//   - `itunes`: A square version of the image with a size of `1400x1400` pixels.
//
// ### Preferred image used in feeds
//
// For the main series image used in feeds, it is ideal to use the `square-3000` version.
// If that is not available, the `itunes` version should be used instead.
func (s *Image) GetImages(ctx context.Context, request operations.GetImagesRequest) (*operations.GetImagesResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/images"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetImagesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/vnd.api+json`):
			var out *operations.GetImages200ApplicationVndAPIPlusJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetImages200ApplicationVndAPIPlusJSONObject = out
		}
	case httpRes.StatusCode == 400:
		switch {
		case utils.MatchContentType(contentType, `application/vnd.api+json`):
			var out *operations.GetImages400ApplicationVndAPIPlusJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetImages400ApplicationVndAPIPlusJSONObject = out
		}
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 406:
	case httpRes.StatusCode == 429:
		res.Headers = httpRes.Header
	}

	return res, nil
}

// GetImagesID - Get a specific image
// An image represents a piece of artwork attached to some entity like a series, season, or episode,
// and is _owned_ by an entity called the `bucket`.
// An image is also a container for several `MediaAssets` representing the physical files for various
// styles used.
//
// ## Media Asset Styles for Images
//
// Most media assets use square images. You may upload and use a square image, or upload an image of any
// shape and crop it to a square by specifying the cropping area. This area – identified by a coordinate
// `x, y` and a `width` & `height` – is the portion of the image used for all cover art. If an image has
// cropping defined, the cropped version of the image will be used in any `regular` or `square` style of media
// asset. If the original file is rectangular and does not have cropping, then the system will use a squared
// version of the original file with the smaller of width or height as the square size.
//
// The original image as uploaded into the system is always retained unmodified and available through
// the style `original`. All media asset styles except `stripped-original` consist of the cropped image.
//
// An image has media assets with the following styles:
//
//   - `original`: This is the original file provided. May not be available, depending on permissions
//     and file type.
//   - `stripped-original`: The original file with all metadata (EXIF, XMP, PNG metadata, etc.) removed.
//     This should be used for any application needing the original, uncropped, image.
//   - `regular`: If the image has cropping defined, this is the cropped image.
//     If not, this is a square version of the original.
//   - `thumb`: A square thumbnail of the image with a size of `100x100` pixels.
//   - `square-400`: A square version of the image with a size of `400x400` pixels.
//   - `square-640`: A square version of the image with a size of `640x640` pixels.
//   - `square-888`: A square version of the image with a size of `888x888` pixels.
//   - `square-3000`: A square version of the image with a size of `3000x3000` pixels.
//     This variant is only created if the cropped width & height are each at least 3000.
//   - `itunes`: A square version of the image with a size of `1400x1400` pixels.
//
// ### Preferred image used in feeds
//
// For the main series image used in feeds, it is ideal to use the `square-3000` version.
// If that is not available, the `itunes` version should be used instead.
func (s *Image) GetImagesID(ctx context.Context, request operations.GetImagesIDRequest) (*operations.GetImagesIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/images/{id}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetImagesIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/vnd.api+json`):
			var out *operations.GetImagesID200ApplicationVndAPIPlusJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetImagesID200ApplicationVndAPIPlusJSONObject = out
		}
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 406:
	case httpRes.StatusCode == 429:
		res.Headers = httpRes.Header
	}

	return res, nil
}
