package operations

import (
	"openapi/pkg/models/shared"
)

type ClearMerchantOrderInfoListV3QueryParams struct {
	TestMode *bool `queryParam:"style=form,explode=true,name=testMode"`
}

type ClearMerchantOrderInfoListV3Request struct {
	QueryParams ClearMerchantOrderInfoListV3QueryParams
	Request     shared.ClearMerchantOrderInfoListRequest `request:"mediaType=application/json"`
}

type ClearMerchantOrderInfoListV3Response struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	StatusCode                       int64
	BatchOrderOperationResponse      *shared.BatchOrderOperationResponse
	ErrorResponseMessage             *shared.ErrorResponseMessage
}
