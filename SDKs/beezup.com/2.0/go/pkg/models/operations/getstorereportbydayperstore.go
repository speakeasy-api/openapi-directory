package operations

import (
	"openapi/pkg/models/shared"
)

type GetStoreReportByDayPerStoreRequest struct {
	Request shared.ReportByDayRequest `request:"mediaType=application/json"`
}

type GetStoreReportByDayPerStoreResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	StatusCode                       int64
	ReportByDayPerStoreResponse      map[string]shared.ReportByDayResponse
}
