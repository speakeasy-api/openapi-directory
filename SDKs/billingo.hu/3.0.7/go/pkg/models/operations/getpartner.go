package operations

import (
	"openapi/pkg/models/shared"
)

type GetPartnerPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type GetPartnerRequest struct {
	PathParams GetPartnerPathParams
}

type GetPartnerResponse struct {
	ClientErrorResponse     *shared.ClientErrorResponse
	ContentType             string
	Headers                 map[string][]string
	Partner                 *shared.Partner
	ServerErrorResponse     *shared.ServerErrorResponse
	StatusCode              int64
	ValidationErrorResponse *shared.ValidationErrorResponse
}
