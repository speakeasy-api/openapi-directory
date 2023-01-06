package operations

import (
	"openapi/pkg/models/shared"
)

type GetOrganizationDataResponse struct {
	ClientErrorResponse     *shared.ClientErrorResponse
	ContentType             string
	Headers                 map[string][]string
	OrganizationData        *shared.OrganizationData
	ServerErrorResponse     *shared.ServerErrorResponse
	StatusCode              int64
	ValidationErrorResponse *shared.ValidationErrorResponse
}
