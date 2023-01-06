package operations

import (
	"openapi/pkg/models/shared"
)

type GetUserAccountInfoHeaders struct {
	IfNoneMatch *string `header:"style=simple,explode=false,name=If-None-Match"`
}

type GetUserAccountInfoRequest struct {
	Headers GetUserAccountInfoHeaders
}

type GetUserAccountInfoResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	Headers                          map[string][]string
	StatusCode                       int64
	AccountInfo                      *shared.AccountInfo
}
