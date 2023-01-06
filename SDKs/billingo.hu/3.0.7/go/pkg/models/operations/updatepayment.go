package operations

import (
	"openapi/pkg/models/shared"
)

type UpdatePaymentPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type UpdatePaymentRequest struct {
	PathParams UpdatePaymentPathParams
	Request    []shared.PaymentHistory `request:"mediaType=application/json"`
}

type UpdatePaymentResponse struct {
	ClientErrorResponse     *shared.ClientErrorResponse
	ContentType             string
	Headers                 map[string][]string
	PaymentHistories        []shared.PaymentHistory
	ServerErrorResponse     *shared.ServerErrorResponse
	StatusCode              int64
	ValidationErrorResponse *shared.ValidationErrorResponse
}
