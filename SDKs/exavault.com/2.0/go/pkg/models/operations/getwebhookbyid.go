package operations

import (
	"openapi/pkg/models/shared"
)

type GetWebhookByIDPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type GetWebhookByIDQueryParams struct {
	Include *string `queryParam:"style=form,explode=true,name=include"`
}

type GetWebhookByIDHeaders struct {
	EvAccessToken string `header:"style=simple,explode=false,name=ev-access-token"`
	EvAPIKey      string `header:"style=simple,explode=false,name=ev-api-key"`
}

type GetWebhookByIDRequest struct {
	PathParams  GetWebhookByIDPathParams
	QueryParams GetWebhookByIDQueryParams
	Headers     GetWebhookByIDHeaders
}

type GetWebhookByIDResponse struct {
	ContentType     string
	StatusCode      int64
	WebhookResponse *shared.WebhookResponse
}
