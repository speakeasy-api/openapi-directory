package operations

import (
	"openapi/pkg/models/shared"
)

type AddEmailListHeaders struct {
	EvAccessToken string `header:"style=simple,explode=false,name=ev-access-token"`
	EvAPIKey      string `header:"style=simple,explode=false,name=ev-api-key"`
}

type AddEmailListAddEmailListRequestBody struct {
	Emails []string `json:"emails"`
	Name   string   `json:"name"`
}

type AddEmailListRequest struct {
	Headers AddEmailListHeaders
	Request *AddEmailListAddEmailListRequestBody `request:"mediaType=application/json"`
}

type AddEmailListResponse struct {
	ContentType       string
	EmailListResponse *shared.EmailListResponse
	StatusCode        int64
}
