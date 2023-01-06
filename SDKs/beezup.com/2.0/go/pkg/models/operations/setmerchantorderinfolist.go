package operations

import (
	"openapi/pkg/models/shared"
)

type SetMerchantOrderInfoListRequest struct {
	Request shared.SetMerchantOrderInfoListRequest `request:"mediaType=application/json"`
}

type SetMerchantOrderInfoListResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	StatusCode                       int64
	BatchOrderOperationResponse      *shared.BatchOrderOperationResponse
}
