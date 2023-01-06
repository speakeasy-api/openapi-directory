package operations

import (
	"openapi/pkg/models/shared"
)

type CompleteDirectSendPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type CompleteDirectSendHeaders struct {
	EvAccessToken string `header:"style=simple,explode=false,name=ev-access-token"`
	EvAPIKey      string `header:"style=simple,explode=false,name=ev-api-key"`
}

type CompleteDirectSendRequest struct {
	PathParams CompleteDirectSendPathParams
	Headers    CompleteDirectSendHeaders
}

type CompleteDirectSendResponse struct {
	ContentType   string
	ShareResponse *shared.ShareResponse
	StatusCode    int64
}
