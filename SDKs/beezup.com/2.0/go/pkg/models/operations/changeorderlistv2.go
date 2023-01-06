package operations

import (
	"openapi/pkg/models/shared"
)

type ChangeOrderListV2PathParams struct {
	ChangeOrderType string `pathParam:"style=simple,explode=false,name=changeOrderType"`
}

type ChangeOrderListV2QueryParams struct {
	TestMode *bool  `queryParam:"style=form,explode=true,name=testMode"`
	UserName string `queryParam:"style=form,explode=true,name=userName"`
}

type ChangeOrderListV2Request struct {
	PathParams  ChangeOrderListV2PathParams
	QueryParams ChangeOrderListV2QueryParams
	Request     shared.ChangeOrderListRequestV2 `request:"mediaType=application/json"`
}

type ChangeOrderListV2Response struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	StatusCode                       int64
	BatchOrderOperationResponse      *shared.BatchOrderOperationResponse
	ErrorResponseMessage             *shared.ErrorResponseMessage
}
