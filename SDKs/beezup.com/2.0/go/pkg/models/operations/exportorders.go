package operations

import (
	"openapi/pkg/models/shared"
)

type ExportOrdersRequest struct {
	Request shared.ExportOrderListRequest `request:"mediaType=application/json"`
}

type ExportOrdersResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	StatusCode                       int64
}
