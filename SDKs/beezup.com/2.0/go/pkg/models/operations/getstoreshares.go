package operations

import (
	"openapi/pkg/models/shared"
)

type GetStoreSharesPathParams struct {
	StoreID string `pathParam:"style=simple,explode=false,name=storeId"`
}

type GetStoreSharesHeaders struct {
	IfNoneMatch *string `header:"style=simple,explode=false,name=If-None-Match"`
}

type GetStoreSharesRequest struct {
	PathParams GetStoreSharesPathParams
	Headers    GetStoreSharesHeaders
}

type GetStoreSharesResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	Headers                          map[string][]string
	StatusCode                       int64
	StoreShares                      *shared.StoreShares
}
