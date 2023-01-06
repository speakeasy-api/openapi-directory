package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteWebhookPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type DeleteWebhookHeaders struct {
	EvAccessToken string `header:"style=simple,explode=false,name=ev-access-token"`
	EvAPIKey      string `header:"style=simple,explode=false,name=ev-api-key"`
}

type DeleteWebhookRequest struct {
	PathParams DeleteWebhookPathParams
	Headers    DeleteWebhookHeaders
}

type DeleteWebhookResponse struct {
	ContentType   string
	EmptyResponse *shared.EmptyResponse
	StatusCode    int64
}
