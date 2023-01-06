package operations

import (
	"openapi/pkg/models/shared"
)

type RetryPushOrdersPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type RetryPushOrdersRequest struct {
	PathParams RetryPushOrdersPathParams
}

type RetryPushOrdersResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	StatusCode                       int64
	ErrorResponseMessage             *shared.ErrorResponseMessage
}
