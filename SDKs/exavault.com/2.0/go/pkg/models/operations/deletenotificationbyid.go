package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteNotificationByIDPathParams struct {
	ID int32 `pathParam:"style=simple,explode=false,name=id"`
}

type DeleteNotificationByIDHeaders struct {
	EvAccessToken string `header:"style=simple,explode=false,name=ev-access-token"`
	EvAPIKey      string `header:"style=simple,explode=false,name=ev-api-key"`
}

type DeleteNotificationByIDRequest struct {
	PathParams DeleteNotificationByIDPathParams
	Headers    DeleteNotificationByIDHeaders
}

type DeleteNotificationByIDResponse struct {
	ContentType   string
	EmptyResponse *shared.EmptyResponse
	StatusCode    int64
}
