package operations

import (
	"openapi/pkg/models/shared"
)

type GetPaymentPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type GetPaymentRequest struct {
	PathParams GetPaymentPathParams
}

type GetPaymentResponse struct {
	ClientErrorResponse     *shared.ClientErrorResponse
	ContentType             string
	Headers                 map[string][]string
	PaymentHistories        []shared.PaymentHistory
	ServerErrorResponse     *shared.ServerErrorResponse
	StatusCode              int64
	ValidationErrorResponse *shared.ValidationErrorResponse
}
