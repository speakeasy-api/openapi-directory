package operations

import (
	"openapi/pkg/models/shared"
)

type SendReferralEmailHeaders struct {
	EvAccessToken string `header:"style=simple,explode=false,name=ev-access-token"`
	EvAPIKey      string `header:"style=simple,explode=false,name=ev-api-key"`
}

type SendReferralEmailSendReferralEmailRequestBody struct {
	Emails  []string `json:"emails"`
	Message string   `json:"message"`
}

type SendReferralEmailRequest struct {
	Headers SendReferralEmailHeaders
	Request *SendReferralEmailSendReferralEmailRequestBody `request:"mediaType=application/json"`
}

type SendReferralEmailResponse struct {
	ContentType   string
	EmptyResponse *shared.EmptyResponse
	StatusCode    int64
}
