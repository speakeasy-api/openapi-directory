package operations

import (
	"openapi/pkg/models/shared"
)

type ListBankAccountQueryParams struct {
	Page    *int64 `queryParam:"style=form,explode=true,name=page"`
	PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
}

type ListBankAccountRequest struct {
	QueryParams ListBankAccountQueryParams
}

type ListBankAccountResponse struct {
	BankAccountList         *shared.BankAccountList
	ClientErrorResponse     *shared.ClientErrorResponse
	ContentType             string
	Headers                 map[string][]string
	ServerErrorResponse     *shared.ServerErrorResponse
	StatusCode              int64
	ValidationErrorResponse *shared.ValidationErrorResponse
}
