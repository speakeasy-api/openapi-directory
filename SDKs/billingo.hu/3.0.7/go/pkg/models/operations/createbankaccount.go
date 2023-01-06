package operations

import (
	"openapi/pkg/models/shared"
)

type CreateBankAccountRequest struct {
	Request shared.BankAccountInput `request:"mediaType=application/json"`
}

type CreateBankAccountResponse struct {
	BankAccount             *shared.BankAccount
	ClientErrorResponse     *shared.ClientErrorResponse
	ContentType             string
	Headers                 map[string][]string
	ServerErrorResponse     *shared.ServerErrorResponse
	StatusCode              int64
	ValidationErrorResponse *shared.ValidationErrorResponse
}
