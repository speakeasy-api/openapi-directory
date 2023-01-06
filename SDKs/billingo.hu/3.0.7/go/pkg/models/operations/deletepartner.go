package operations

import (
	"openapi/pkg/models/shared"
)

type DeletePartnerPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type DeletePartnerRequest struct {
	PathParams DeletePartnerPathParams
}

type DeletePartnerResponse struct {
	ClientErrorResponse *shared.ClientErrorResponse
	ContentType         string
	Headers             map[string][]string
	ServerErrorResponse *shared.ServerErrorResponse
	StatusCode          int64
}
