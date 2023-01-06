package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateBankAccountPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type UpdateBankAccountRequest struct {
	PathParams UpdateBankAccountPathParams
	Request    shared.BankAccountInput `request:"mediaType=application/json"`
}

type UpdateBankAccountResponse struct {
	BankAccount             *shared.BankAccount
	ClientErrorResponse     *shared.ClientErrorResponse
	ContentType             string
	Headers                 map[string][]string
	ServerErrorResponse     *shared.ServerErrorResponse
	StatusCode              int64
	ValidationErrorResponse *shared.ValidationErrorResponse
}
