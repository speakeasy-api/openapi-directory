package operations

import (
	"openapi/pkg/models/shared"
)

type GetSeasonsIDPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetSeasonsID200ApplicationVndAPIPlusJSON struct {
	Data  *shared.Season       `json:"data,omitempty"`
	Links *shared.ResourceLink `json:"links,omitempty"`
}

type GetSeasonsIDRequest struct {
	PathParams GetSeasonsIDPathParams
}

type GetSeasonsIDResponse struct {
	ContentType                                    string
	Headers                                        map[string][]string
	StatusCode                                     int64
	GetSeasonsID200ApplicationVndAPIPlusJSONObject *GetSeasonsID200ApplicationVndAPIPlusJSON
}
