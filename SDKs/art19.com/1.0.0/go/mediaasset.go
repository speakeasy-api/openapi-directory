package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/pkg/models/operations"
	"openapi/pkg/utils"
	"strings"
)

type MediaAsset struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewMediaAsset(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *MediaAsset {
	return &MediaAsset{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// GetMediaAssets - Get a list of media assets
// A media asset is part of a collection of assets or files representing an image or a piece of audio content
// like an episode or an ad. Images, for example, have differently sized versions for better rendering performance,
// and a piece of audio content usually comes in different encoding formats.
//
// The `style` attribute of a media asset describes the role an asset plays in the context of the collection.
// The collection is what an asset is attached to (`attachment_id|type`).
//
// ## Styles for Images
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
//
// ## Styles for Audio
//
//   - `medium`: A medium-quality version of the audio asset in various formats.
//   - `original`: This is the original file provided. May not be available, depending on permissions
//     and file type.
//   - `waveform_data`: The generated BBC Audiowaveform data in JSON or binary format.
func (s *MediaAsset) GetMediaAssets(ctx context.Context, request operations.GetMediaAssetsRequest) (*operations.GetMediaAssetsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/media_assets"

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

	res := &operations.GetMediaAssetsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/vnd.api+json`):
			var out *operations.GetMediaAssets200ApplicationVndAPIPlusJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetMediaAssets200ApplicationVndAPIPlusJSONObject = out
		}
	case httpRes.StatusCode == 400:
		switch {
		case utils.MatchContentType(contentType, `application/vnd.api+json`):
			var out *operations.GetMediaAssets400ApplicationVndAPIPlusJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetMediaAssets400ApplicationVndAPIPlusJSONObject = out
		}
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 406:
	case httpRes.StatusCode == 429:
		res.Headers = httpRes.Header
	}

	return res, nil
}

// GetMediaAssetsID - Get a specific media asset
// A media asset is part of a collection of assets or files representing an image or a piece of audio content
// like an episode or an ad. Images, for example, have differently sized versions for better rendering performance,
// and a piece of audio content usually comes in different encoding formats.
//
// The `style` attribute of a media asset describes the role an asset plays in the context of the collection.
// The collection is what an asset is attached to (`attachment_id|type`).
//
// ## Styles for Images
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
//
// ## Styles for Audio
//
//   - `medium`: A medium-quality version of the audio asset in various formats.
//   - `original`: This is the original file provided. May not be available, depending on permissions
//     and file type.
//   - `waveform_data`: The generated BBC Audiowaveform data in JSON or binary format.
func (s *MediaAsset) GetMediaAssetsID(ctx context.Context, request operations.GetMediaAssetsIDRequest) (*operations.GetMediaAssetsIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/media_assets/{id}", request.PathParams)

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

	res := &operations.GetMediaAssetsIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/vnd.api+json`):
			var out *operations.GetMediaAssetsID200ApplicationVndAPIPlusJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetMediaAssetsID200ApplicationVndAPIPlusJSONObject = out
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
