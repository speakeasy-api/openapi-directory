package operations

import (
	"openapi/pkg/models/shared"
)

type GetSubscriptionPushReportingPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetSubscriptionPushReportingQueryParams struct {
	PageNumber *int64 `queryParam:"style=form,explode=true,name=pageNumber"`
	PageSize   *int64 `queryParam:"style=form,explode=true,name=pageSize"`
}

type GetSubscriptionPushReportingRequest struct {
	PathParams  GetSubscriptionPushReportingPathParams
	QueryParams GetSubscriptionPushReportingQueryParams
}

type GetSubscriptionPushReportingResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	Headers                          map[string][]string
	StatusCode                       int64
	ErrorResponseMessage             *shared.ErrorResponseMessage
	SubscriptionPushReportings       []shared.SubscriptionPushReporting
}
