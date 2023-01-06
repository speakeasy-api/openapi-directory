package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteFormMessageByIDPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type DeleteFormMessageByIDHeaders struct {
	EvAccessToken string `header:"style=simple,explode=false,name=ev-access-token"`
	EvAPIKey      string `header:"style=simple,explode=false,name=ev-api-key"`
}

type DeleteFormMessageByIDRequest struct {
	PathParams DeleteFormMessageByIDPathParams
	Headers    DeleteFormMessageByIDHeaders
}

type DeleteFormMessageByIDResponse struct {
	ContentType   string
	EmptyResponse *shared.EmptyResponse
	StatusCode    int64
}
