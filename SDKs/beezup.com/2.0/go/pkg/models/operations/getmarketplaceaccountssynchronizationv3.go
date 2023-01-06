package operations

import (
	"openapi/pkg/models/shared"
)

type GetMarketplaceAccountsSynchronizationV3QueryParams struct {
	StoreIds []string `queryParam:"style=form,explode=false,name=storeIds"`
}

type GetMarketplaceAccountsSynchronizationV3Headers struct {
	IfNoneMatch *string `header:"style=simple,explode=false,name=If-None-Match"`
}

type GetMarketplaceAccountsSynchronizationV3Request struct {
	QueryParams GetMarketplaceAccountsSynchronizationV3QueryParams
	Headers     GetMarketplaceAccountsSynchronizationV3Headers
}

type GetMarketplaceAccountsSynchronizationV3Response struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	Headers                          map[string][]string
	StatusCode                       int64
	AccountSynchronizationList       *shared.AccountSynchronizationList
	ErrorResponseMessage             *shared.ErrorResponseMessage
}
