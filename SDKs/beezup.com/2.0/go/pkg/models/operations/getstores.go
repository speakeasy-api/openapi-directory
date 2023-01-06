package operations

import (
	"openapi/pkg/models/shared"
)

type GetStoresHeaders struct {
	IfNoneMatch *string `header:"style=simple,explode=false,name=If-None-Match"`
}

type GetStoresRequest struct {
	Headers GetStoresHeaders
}

type GetStoresResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	Headers                          map[string][]string
	StatusCode                       int64
	StoreList                        *shared.StoreList
}
