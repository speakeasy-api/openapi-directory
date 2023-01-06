package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetWebhookLogsQueryParams struct {
	EndDate      *time.Time `queryParam:"style=form,explode=true,name=endDate"`
	EndpointURL  *string    `queryParam:"style=form,explode=true,name=endpointUrl"`
	Event        *string    `queryParam:"style=form,explode=true,name=event"`
	Limit        *int64     `queryParam:"style=form,explode=true,name=limit"`
	Offset       *int64     `queryParam:"style=form,explode=true,name=offset"`
	ResourcePath *string    `queryParam:"style=form,explode=true,name=resourcePath"`
	Sort         *string    `queryParam:"style=form,explode=true,name=sort"`
	StartDate    *time.Time `queryParam:"style=form,explode=true,name=startDate"`
	StatusCode   *int64     `queryParam:"style=form,explode=true,name=statusCode"`
	Username     *string    `queryParam:"style=form,explode=true,name=username"`
}

type GetWebhookLogsHeaders struct {
	EvAccessToken string `header:"style=simple,explode=false,name=ev-access-token"`
	EvAPIKey      string `header:"style=simple,explode=false,name=ev-api-key"`
}

type GetWebhookLogsRequest struct {
	QueryParams GetWebhookLogsQueryParams
	Headers     GetWebhookLogsHeaders
}

type GetWebhookLogsResponse struct {
	ContentType             string
	StatusCode              int64
	WebhookActivityResponse *shared.WebhookActivityResponse
}
