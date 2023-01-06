package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteUserPathParams struct {
	ID int32 `pathParam:"style=simple,explode=false,name=id"`
}

type DeleteUserHeaders struct {
	EvAccessToken string `header:"style=simple,explode=false,name=ev-access-token"`
	EvAPIKey      string `header:"style=simple,explode=false,name=ev-api-key"`
}

type DeleteUserRequest struct {
	PathParams DeleteUserPathParams
	Headers    DeleteUserHeaders
}

type DeleteUserResponse struct {
	ContentType   string
	EmptyResponse *shared.EmptyResponse
	StatusCode    int64
}
