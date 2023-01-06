package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateResourceByIDPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type UpdateResourceByIDHeaders struct {
	EvAccessToken string `header:"style=simple,explode=false,name=ev-access-token"`
	EvAPIKey      string `header:"style=simple,explode=false,name=ev-api-key"`
}

type UpdateResourceByIDUpdateResourceByIDRequestBody struct {
	Name *string `json:"name,omitempty"`
}

type UpdateResourceByIDRequest struct {
	PathParams UpdateResourceByIDPathParams
	Headers    UpdateResourceByIDHeaders
	Request    *UpdateResourceByIDUpdateResourceByIDRequestBody `request:"mediaType=application/json"`
}

type UpdateResourceByIDResponse struct {
	ContentType      string
	ResourceResponse *shared.ResourceResponse
	StatusCode       int64
}
