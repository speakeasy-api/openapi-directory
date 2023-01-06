package operations

import (
	"openapi/pkg/models/shared"
)

type ResendWebhookActivityEntryPathParams struct {
	ActivityID string `pathParam:"style=simple,explode=false,name=activityId"`
}

type ResendWebhookActivityEntryHeaders struct {
	EvAccessToken string `header:"style=simple,explode=false,name=ev-access-token"`
	EvAPIKey      string `header:"style=simple,explode=false,name=ev-api-key"`
}

type ResendWebhookActivityEntryRequest struct {
	PathParams ResendWebhookActivityEntryPathParams
	Headers    ResendWebhookActivityEntryHeaders
}

type ResendWebhookActivityEntryResponse struct {
	ContentType   string
	EmptyResponse *shared.EmptyResponse
	StatusCode    int64
}
