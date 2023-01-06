package operations

import (
	"openapi/pkg/models/shared"
)

type GetOrderExportationsQueryParams struct {
	PageNumber int32  `queryParam:"style=form,explode=true,name=pageNumber"`
	PageSize   int32  `queryParam:"style=form,explode=true,name=pageSize"`
	StoreID    string `queryParam:"style=form,explode=true,name=storeId"`
}

type GetOrderExportationsHeaders struct {
	IfNoneMatch *string `header:"style=simple,explode=false,name=If-None-Match"`
}

type GetOrderExportationsRequest struct {
	QueryParams GetOrderExportationsQueryParams
	Headers     GetOrderExportationsHeaders
}

type GetOrderExportationsResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	Headers                          map[string][]string
	StatusCode                       int64
	OrderExportations                *shared.OrderExportations
}
