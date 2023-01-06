package operations

import (
	"openapi/pkg/models/shared"
)

type GetMarketplaceAccountsSynchronizationQueryParams struct {
	StoreID *string `queryParam:"style=form,explode=true,name=storeId"`
}

type GetMarketplaceAccountsSynchronizationHeaders struct {
	IfNoneMatch *string `header:"style=simple,explode=false,name=If-None-Match"`
}

type GetMarketplaceAccountsSynchronizationRequest struct {
	QueryParams GetMarketplaceAccountsSynchronizationQueryParams
	Headers     GetMarketplaceAccountsSynchronizationHeaders
}

type GetMarketplaceAccountsSynchronizationResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	Headers                          map[string][]string
	StatusCode                       int64
	AccountSynchronizationList       *shared.AccountSynchronizationList
}
