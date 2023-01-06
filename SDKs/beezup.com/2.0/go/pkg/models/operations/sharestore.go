package operations

import (
	"openapi/pkg/models/shared"
)

type ShareStorePathParams struct {
	StoreID string `pathParam:"style=simple,explode=false,name=storeId"`
}

type ShareStoreRequest struct {
	PathParams ShareStorePathParams
	Request    string `request:"mediaType=application/json"`
}

type ShareStoreResponse struct {
	BeezUPCommonErrorResponseMessage    *shared.BeezUpCommonErrorResponseMessage
	ContentType                         string
	StatusCode                          int64
	ErrorResponseMessagePaymentRequired *shared.ErrorResponseMessagePaymentRequired
}
