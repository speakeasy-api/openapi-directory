package operations

import (
	"openapi/pkg/models/shared"
)

type SaveCompanyInfoRequest struct {
	Request shared.CompanyInfo `request:"mediaType=application/json"`
}

type SaveCompanyInfoResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	StatusCode                       int64
}
