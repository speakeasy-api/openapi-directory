package operations

import (
	"openapi/pkg/models/shared"
)

type ListPartnerQueryParams struct {
	Page    *int64 `queryParam:"style=form,explode=true,name=page"`
	PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
}

type ListPartnerRequest struct {
	QueryParams ListPartnerQueryParams
}

type ListPartnerResponse struct {
	ClientErrorResponse     *shared.ClientErrorResponse
	ContentType             string
	Headers                 map[string][]string
	PartnerList             *shared.PartnerList
	ServerErrorResponse     *shared.ServerErrorResponse
	StatusCode              int64
	ValidationErrorResponse *shared.ValidationErrorResponse
}
