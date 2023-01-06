package operations

import (
	"openapi/pkg/models/shared"
)

type GetPeopleIDPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetPeopleID200ApplicationVndAPIPlusJSON struct {
	Data  *shared.Person       `json:"data,omitempty"`
	Links *shared.ResourceLink `json:"links,omitempty"`
}

type GetPeopleIDRequest struct {
	PathParams GetPeopleIDPathParams
}

type GetPeopleIDResponse struct {
	ContentType                                   string
	Headers                                       map[string][]string
	StatusCode                                    int64
	GetPeopleID200ApplicationVndAPIPlusJSONObject *GetPeopleID200ApplicationVndAPIPlusJSON
}
