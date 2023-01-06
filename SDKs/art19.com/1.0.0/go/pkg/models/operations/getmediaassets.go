package operations

import (
	"openapi/pkg/models/shared"
)

type GetMediaAssetsQueryParams struct {
	Ids []string `queryParam:"style=form,explode=true,name=ids[]"`
}

type GetMediaAssets200ApplicationVndAPIPlusJSON struct {
	Data  []shared.MediaAsset `json:"data,omitempty"`
	Links *shared.Links       `json:"links,omitempty"`
}

// GetMediaAssets400ApplicationVndAPIPlusJSONErrorsSource
// An object containing references to the source of the error, optionally including any of the following members.
type GetMediaAssets400ApplicationVndAPIPlusJSONErrorsSource struct {
	Parameter *string `json:"parameter,omitempty"`
	Pointer   *string `json:"pointer,omitempty"`
}

type GetMediaAssets400ApplicationVndAPIPlusJSONErrors struct {
	Code   *string                                                 `json:"code,omitempty"`
	Detail *string                                                 `json:"detail,omitempty"`
	Source *GetMediaAssets400ApplicationVndAPIPlusJSONErrorsSource `json:"source,omitempty"`
	Status *string                                                 `json:"status,omitempty"`
	Title  *string                                                 `json:"title,omitempty"`
}

type GetMediaAssets400ApplicationVndAPIPlusJSON struct {
	Errors []GetMediaAssets400ApplicationVndAPIPlusJSONErrors `json:"errors,omitempty"`
}

type GetMediaAssetsRequest struct {
	QueryParams GetMediaAssetsQueryParams
}

type GetMediaAssetsResponse struct {
	ContentType                                      string
	Headers                                          map[string][]string
	StatusCode                                       int64
	GetMediaAssets200ApplicationVndAPIPlusJSONObject *GetMediaAssets200ApplicationVndAPIPlusJSON
	GetMediaAssets400ApplicationVndAPIPlusJSONObject *GetMediaAssets400ApplicationVndAPIPlusJSON
}
