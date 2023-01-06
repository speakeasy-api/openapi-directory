package operations

import (
	"openapi/pkg/models/shared"
)

type GetBankAccountPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type GetBankAccountRequest struct {
	PathParams GetBankAccountPathParams
}

type GetBankAccountResponse struct {
	BankAccount             *shared.BankAccount
	ClientErrorResponse     *shared.ClientErrorResponse
	ContentType             string
	Headers                 map[string][]string
	ServerErrorResponse     *shared.ServerErrorResponse
	StatusCode              int64
	ValidationErrorResponse *shared.ValidationErrorResponse
}
