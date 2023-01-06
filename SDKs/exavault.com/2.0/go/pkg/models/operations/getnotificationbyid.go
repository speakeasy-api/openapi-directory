package operations

import (
	"openapi/pkg/models/shared"
)

type GetNotificationByIDPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type GetNotificationByIDQueryParams struct {
	Include *string `queryParam:"style=form,explode=true,name=include"`
}

type GetNotificationByIDHeaders struct {
	EvAccessToken string `header:"style=simple,explode=false,name=ev-access-token"`
	EvAPIKey      string `header:"style=simple,explode=false,name=ev-api-key"`
}

type GetNotificationByIDRequest struct {
	PathParams  GetNotificationByIDPathParams
	QueryParams GetNotificationByIDQueryParams
	Headers     GetNotificationByIDHeaders
}

type GetNotificationByIDResponse struct {
	ContentType          string
	NotificationResponse *shared.NotificationResponse
	StatusCode           int64
}
