package operations

import (
	"openapi/pkg/models/shared"
)

type CreatePartnerRequest struct {
	Request shared.PartnerUpsert `request:"mediaType=application/json"`
}

type CreatePartnerResponse struct {
	ClientErrorResponse     *shared.ClientErrorResponse
	ContentType             string
	Headers                 map[string][]string
	Partner                 *shared.Partner
	ServerErrorResponse     *shared.ServerErrorResponse
	StatusCode              int64
	ValidationErrorResponse *shared.ValidationErrorResponse
}
