package operations

import (
	"openapi/pkg/models/shared"
)

type UpdatePartnerPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type UpdatePartnerRequest struct {
	PathParams UpdatePartnerPathParams
	Request    shared.PartnerUpsert `request:"mediaType=application/json"`
}

type UpdatePartnerResponse struct {
	ClientErrorResponse     *shared.ClientErrorResponse
	ContentType             string
	Headers                 map[string][]string
	Partner                 *shared.Partner
	ServerErrorResponse     *shared.ServerErrorResponse
	StatusCode              int64
	ValidationErrorResponse *shared.ValidationErrorResponse
}
