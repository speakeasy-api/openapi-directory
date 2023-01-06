package operations

import (
	"openapi/pkg/models/shared"
)

type GetSeriesIDPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetSeriesID200ApplicationVndAPIPlusJSON struct {
	Data  *shared.Series       `json:"data,omitempty"`
	Links *shared.ResourceLink `json:"links,omitempty"`
}

type GetSeriesIDRequest struct {
	PathParams GetSeriesIDPathParams
}

type GetSeriesIDResponse struct {
	ContentType                                   string
	Headers                                       map[string][]string
	StatusCode                                    int64
	GetSeriesID200ApplicationVndAPIPlusJSONObject *GetSeriesID200ApplicationVndAPIPlusJSON
}
