package operations

import (
	"openapi/pkg/models/shared"
)

type ClearMerchantOrderInfoListRequest struct {
	Request shared.ClearMerchantOrderInfoListRequest `request:"mediaType=application/json"`
}

type ClearMerchantOrderInfoListResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	StatusCode                       int64
	BatchOrderOperationResponse      *shared.BatchOrderOperationResponse
}
