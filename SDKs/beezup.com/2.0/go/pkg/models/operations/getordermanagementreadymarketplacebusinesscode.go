package operations

import (
	"openapi/pkg/models/shared"
)

type GetOrderManagementReadyMarketplaceBusinessCodeQueryParams struct {
	StoreIds []string `queryParam:"style=form,explode=false,name=storeIds"`
}

type GetOrderManagementReadyMarketplaceBusinessCodeHeaders struct {
	AcceptLanguage []string `header:"style=simple,explode=false,name=Accept-Language"`
}

type GetOrderManagementReadyMarketplaceBusinessCodeRequest struct {
	QueryParams GetOrderManagementReadyMarketplaceBusinessCodeQueryParams
	Headers     GetOrderManagementReadyMarketplaceBusinessCodeHeaders
}

type GetOrderManagementReadyMarketplaceBusinessCodeResponse struct {
	BeezUPCommonErrorResponseMessage       *shared.BeezUpCommonErrorResponseMessage
	ContentType                            string
	Headers                                map[string][]string
	StatusCode                             int64
	ErrorResponseMessage                   *shared.ErrorResponseMessage
	OMReadyMarketplaceBusinessCodeResponse []shared.ListOfValueItem
}
