package operations

import (
	"openapi/pkg/models/shared"
)

type ChangeOrderListV3QueryParams struct {
	TestMode *bool  `queryParam:"style=form,explode=true,name=testMode"`
	UserName string `queryParam:"style=form,explode=true,name=userName"`
}

type ChangeOrderListV3Request struct {
	QueryParams ChangeOrderListV3QueryParams
	Request     shared.ChangeOrderListRequest `request:"mediaType=application/json"`
}

type ChangeOrderListV3Response struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	StatusCode                       int64
	BatchOrderOperationResponse      *shared.BatchOrderOperationResponse
	ErrorResponseMessage             *shared.ErrorResponseMessage
}
