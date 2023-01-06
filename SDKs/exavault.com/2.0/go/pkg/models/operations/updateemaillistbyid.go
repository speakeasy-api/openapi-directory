package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateEmailListByIDPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type UpdateEmailListByIDHeaders struct {
	EvAccessToken string `header:"style=simple,explode=false,name=ev-access-token"`
	EvAPIKey      string `header:"style=simple,explode=false,name=ev-api-key"`
}

type UpdateEmailListByIDUpdateEmailListRequestBody struct {
	Emails []string `json:"emails,omitempty"`
	Name   *string  `json:"name,omitempty"`
}

type UpdateEmailListByIDRequest struct {
	PathParams UpdateEmailListByIDPathParams
	Headers    UpdateEmailListByIDHeaders
	Request    *UpdateEmailListByIDUpdateEmailListRequestBody `request:"mediaType=application/json"`
}

type UpdateEmailListByIDResponse struct {
	ContentType       string
	EmailListResponse *shared.EmailListResponse
	StatusCode        int64
}
