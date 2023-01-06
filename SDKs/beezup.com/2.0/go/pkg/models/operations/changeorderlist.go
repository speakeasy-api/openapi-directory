package operations

import (
	"openapi/pkg/models/shared"
)

type ChangeOrderListPathParams struct {
	ChangeOrderType string `pathParam:"style=simple,explode=false,name=changeOrderType"`
}

type ChangeOrderListQueryParams struct {
	TestMode *bool  `queryParam:"style=form,explode=true,name=testMode"`
	UserName string `queryParam:"style=form,explode=true,name=userName"`
}

type ChangeOrderListRequest struct {
	PathParams  ChangeOrderListPathParams
	QueryParams ChangeOrderListQueryParams
	Request     shared.ChangeOrderListRequest `request:"mediaType=application/json"`
}

type ChangeOrderListResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	StatusCode                       int64
	BatchOrderOperationResponse      *shared.BatchOrderOperationResponse
}
