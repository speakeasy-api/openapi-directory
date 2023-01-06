package operations

import (
	"openapi/pkg/models/shared"
)

type GetCreditsIDPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetCreditsID200ApplicationVndAPIPlusJSON struct {
	Data  *shared.Credit       `json:"data,omitempty"`
	Links *shared.ResourceLink `json:"links,omitempty"`
}

type GetCreditsIDRequest struct {
	PathParams GetCreditsIDPathParams
}

type GetCreditsIDResponse struct {
	ContentType                                    string
	Headers                                        map[string][]string
	StatusCode                                     int64
	GetCreditsID200ApplicationVndAPIPlusJSONObject *GetCreditsID200ApplicationVndAPIPlusJSON
}
