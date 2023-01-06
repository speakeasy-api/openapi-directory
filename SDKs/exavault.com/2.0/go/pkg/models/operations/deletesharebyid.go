package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteShareByIDPathParams struct {
	ID int32 `pathParam:"style=simple,explode=false,name=id"`
}

type DeleteShareByIDHeaders struct {
	EvAccessToken string `header:"style=simple,explode=false,name=ev-access-token"`
	EvAPIKey      string `header:"style=simple,explode=false,name=ev-api-key"`
}

type DeleteShareByIDRequest struct {
	PathParams DeleteShareByIDPathParams
	Headers    DeleteShareByIDHeaders
}

type DeleteShareByIDResponse struct {
	ContentType   string
	EmptyResponse *shared.EmptyResponse
	StatusCode    int64
}
