package operations

import (
	"openapi/pkg/models/shared"
)

type RegenerateWebhookTokenPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type RegenerateWebhookTokenHeaders struct {
	EvAccessToken string `header:"style=simple,explode=false,name=ev-access-token"`
	EvAPIKey      string `header:"style=simple,explode=false,name=ev-api-key"`
}

type RegenerateWebhookTokenRequest struct {
	PathParams RegenerateWebhookTokenPathParams
	Headers    RegenerateWebhookTokenHeaders
}

type RegenerateWebhookTokenResponse struct {
	ContentType     string
	StatusCode      int64
	WebhookResponse *shared.WebhookResponse
}
