package operations

import (
	"openapi/pkg/models/shared"
)

type GetClassificationsIDPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetClassificationsID200ApplicationVndAPIPlusJSON struct {
	Data  *shared.Classification `json:"data,omitempty"`
	Links *shared.ResourceLink   `json:"links,omitempty"`
}

type GetClassificationsIDRequest struct {
	PathParams GetClassificationsIDPathParams
}

type GetClassificationsIDResponse struct {
	ContentType                                            string
	Headers                                                map[string][]string
	StatusCode                                             int64
	GetClassificationsID200ApplicationVndAPIPlusJSONObject *GetClassificationsID200ApplicationVndAPIPlusJSON
}
