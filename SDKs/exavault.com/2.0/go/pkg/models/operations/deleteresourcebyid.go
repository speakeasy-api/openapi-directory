package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteResourceByIDPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type DeleteResourceByIDHeaders struct {
	EvAccessToken string `header:"style=simple,explode=false,name=ev-access-token"`
	EvAPIKey      string `header:"style=simple,explode=false,name=ev-api-key"`
}

type DeleteResourceByIDRequest struct {
	PathParams DeleteResourceByIDPathParams
	Headers    DeleteResourceByIDHeaders
}

type DeleteResourceByIDResponse struct {
	ContentType   string
	EmptyResponse *shared.EmptyResponse
	StatusCode    int64
}
