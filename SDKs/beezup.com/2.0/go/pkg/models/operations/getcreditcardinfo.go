package operations

import (
	"openapi/pkg/models/shared"
)

type GetCreditCardInfoHeaders struct {
	IfNoneMatch *string `header:"style=simple,explode=false,name=If-None-Match"`
}

type GetCreditCardInfoRequest struct {
	Headers GetCreditCardInfoHeaders
}

type GetCreditCardInfoResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	Headers                          map[string][]string
	StatusCode                       int64
	CreditCardInfoResponse           *shared.CreditCardInfoResponse
}
