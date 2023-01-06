package operations

import (
	"openapi/pkg/models/shared"
)

type SaveCreditCardInfoRequest struct {
	Request shared.CreditCardInfo `request:"mediaType=application/json"`
}

type SaveCreditCardInfoResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	StatusCode                       int64
}
