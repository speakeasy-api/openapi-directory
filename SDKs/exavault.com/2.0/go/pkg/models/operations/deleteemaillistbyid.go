package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteEmailListByIDPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type DeleteEmailListByIDHeaders struct {
	EvAccessToken string `header:"style=simple,explode=false,name=ev-access-token"`
	EvAPIKey      string `header:"style=simple,explode=false,name=ev-api-key"`
}

type DeleteEmailListByIDRequest struct {
	PathParams DeleteEmailListByIDPathParams
	Headers    DeleteEmailListByIDHeaders
}

type DeleteEmailListByIDResponse struct {
	ContentType   string
	EmptyResponse *shared.EmptyResponse
	StatusCode    int64
}
