package operations

import (
	"openapi/pkg/models/shared"
)

type SetMerchantOrderInfoListV3QueryParams struct {
	TestMode *bool `queryParam:"style=form,explode=true,name=testMode"`
}

type SetMerchantOrderInfoListV3Request struct {
	QueryParams SetMerchantOrderInfoListV3QueryParams
	Request     shared.SetMerchantOrderInfoListRequest `request:"mediaType=application/json"`
}

type SetMerchantOrderInfoListV3Response struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	StatusCode                       int64
	BatchOrderOperationResponse      *shared.BatchOrderOperationResponse
	ErrorResponseMessage             *shared.ErrorResponseMessage
}
