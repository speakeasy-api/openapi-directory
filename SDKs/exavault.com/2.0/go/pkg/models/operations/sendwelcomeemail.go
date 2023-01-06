package operations

import (
	"openapi/pkg/models/shared"
)

type SendWelcomeEmailPathParams struct {
	Username string `pathParam:"style=simple,explode=false,name=username"`
}

type SendWelcomeEmailHeaders struct {
	EvAccessToken string `header:"style=simple,explode=false,name=ev-access-token"`
	EvAPIKey      string `header:"style=simple,explode=false,name=ev-api-key"`
}

type SendWelcomeEmailRequest struct {
	PathParams SendWelcomeEmailPathParams
	Headers    SendWelcomeEmailHeaders
}

type SendWelcomeEmailResponse struct {
	ContentType   string
	EmptyResponse *shared.EmptyResponse
	StatusCode    int64
}
