package operations

import (
	"openapi/pkg/models/shared"
)

type GetImagesQueryParams struct {
	Ids []string `queryParam:"style=form,explode=true,name=ids[]"`
}

type GetImages200ApplicationVndAPIPlusJSON struct {
	Data  []shared.Image `json:"data,omitempty"`
	Links *shared.Links  `json:"links,omitempty"`
}

// GetImages400ApplicationVndAPIPlusJSONErrorsSource
// An object containing references to the source of the error, optionally including any of the following members.
type GetImages400ApplicationVndAPIPlusJSONErrorsSource struct {
	Parameter *string `json:"parameter,omitempty"`
	Pointer   *string `json:"pointer,omitempty"`
}

type GetImages400ApplicationVndAPIPlusJSONErrors struct {
	Code   *string                                            `json:"code,omitempty"`
	Detail *string                                            `json:"detail,omitempty"`
	Source *GetImages400ApplicationVndAPIPlusJSONErrorsSource `json:"source,omitempty"`
	Status *string                                            `json:"status,omitempty"`
	Title  *string                                            `json:"title,omitempty"`
}

type GetImages400ApplicationVndAPIPlusJSON struct {
	Errors []GetImages400ApplicationVndAPIPlusJSONErrors `json:"errors,omitempty"`
}

type GetImagesRequest struct {
	QueryParams GetImagesQueryParams
}

type GetImagesResponse struct {
	ContentType                                 string
	Headers                                     map[string][]string
	StatusCode                                  int64
	GetImages200ApplicationVndAPIPlusJSONObject *GetImages200ApplicationVndAPIPlusJSON
	GetImages400ApplicationVndAPIPlusJSONObject *GetImages400ApplicationVndAPIPlusJSON
}
