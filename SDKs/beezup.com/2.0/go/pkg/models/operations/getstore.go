package operations

import (
	"openapi/pkg/models/shared"
)

type GetStorePathParams struct {
	StoreID string `pathParam:"style=simple,explode=false,name=storeId"`
}

type GetStoreHeaders struct {
	IfNoneMatch *string `header:"style=simple,explode=false,name=If-None-Match"`
}

type GetStoreRequest struct {
	PathParams GetStorePathParams
	Headers    GetStoreHeaders
}

type GetStoreResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	Headers                          map[string][]string
	StatusCode                       int64
	Store                            *shared.Store
}
