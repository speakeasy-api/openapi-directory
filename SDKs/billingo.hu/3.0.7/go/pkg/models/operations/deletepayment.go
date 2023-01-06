package operations

import (
	"openapi/pkg/models/shared"
)

type DeletePaymentPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type DeletePaymentRequest struct {
	PathParams DeletePaymentPathParams
}

type DeletePaymentResponse struct {
	ClientErrorResponse *shared.ClientErrorResponse
	ContentType         string
	Headers             map[string][]string
	PaymentHistories    []shared.PaymentHistory
	ServerErrorResponse *shared.ServerErrorResponse
	StatusCode          int64
}
