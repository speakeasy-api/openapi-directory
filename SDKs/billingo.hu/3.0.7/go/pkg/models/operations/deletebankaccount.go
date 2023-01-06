package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteBankAccountPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type DeleteBankAccountRequest struct {
	PathParams DeleteBankAccountPathParams
}

type DeleteBankAccountResponse struct {
	ClientErrorResponse *shared.ClientErrorResponse
	ContentType         string
	Headers             map[string][]string
	ServerErrorResponse *shared.ServerErrorResponse
	StatusCode          int64
}
