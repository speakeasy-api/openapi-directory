package operations

import (
	"openapi/pkg/models/shared"
)

type GetNetworksAdDealStatusEnum string

const (
	GetNetworksAdDealStatusEnumActive          GetNetworksAdDealStatusEnum = "active"
	GetNetworksAdDealStatusEnumInactive        GetNetworksAdDealStatusEnum = "inactive"
	GetNetworksAdDealStatusEnumPendingActive   GetNetworksAdDealStatusEnum = "pending_active"
	GetNetworksAdDealStatusEnumPendingInactive GetNetworksAdDealStatusEnum = "pending_inactive"
)

type GetNetworksSortEnum string

const (
	GetNetworksSortEnumCreatedAt GetNetworksSortEnum = "created_at"
	GetNetworksSortEnumName      GetNetworksSortEnum = "name"
	GetNetworksSortEnumUpdatedAt GetNetworksSortEnum = "updated_at"
)

type GetNetworksQueryParams struct {
	AdDealStatus   []GetNetworksAdDealStatusEnum `queryParam:"style=form,explode=false,name=ad_deal_status"`
	AdRepAccountID *string                       `queryParam:"style=form,explode=true,name=ad_rep_account_id"`
	Ids            []string                      `queryParam:"style=form,explode=true,name=ids[]"`
	PageNumber     *int64                        `queryParam:"style=form,explode=true,name=page[number]"`
	PageSize       *int64                        `queryParam:"style=form,explode=true,name=page[size]"`
	Q              *string                       `queryParam:"style=form,explode=true,name=q"`
	Sort           []GetNetworksSortEnum         `queryParam:"style=form,explode=false,name=sort"`
}

type GetNetworks200ApplicationVndAPIPlusJSON struct {
	Data  []shared.Network `json:"data,omitempty"`
	Links *shared.Links    `json:"links,omitempty"`
}

// GetNetworks400ApplicationVndAPIPlusJSONErrorsSource
// An object containing references to the source of the error, optionally including any of the following members.
type GetNetworks400ApplicationVndAPIPlusJSONErrorsSource struct {
	Parameter *string `json:"parameter,omitempty"`
	Pointer   *string `json:"pointer,omitempty"`
}

type GetNetworks400ApplicationVndAPIPlusJSONErrors struct {
	Code   *string                                              `json:"code,omitempty"`
	Detail *string                                              `json:"detail,omitempty"`
	Source *GetNetworks400ApplicationVndAPIPlusJSONErrorsSource `json:"source,omitempty"`
	Status *string                                              `json:"status,omitempty"`
	Title  *string                                              `json:"title,omitempty"`
}

type GetNetworks400ApplicationVndAPIPlusJSON struct {
	Errors []GetNetworks400ApplicationVndAPIPlusJSONErrors `json:"errors,omitempty"`
}

type GetNetworksRequest struct {
	QueryParams GetNetworksQueryParams
}

type GetNetworksResponse struct {
	ContentType                                   string
	Headers                                       map[string][]string
	StatusCode                                    int64
	GetNetworks200ApplicationVndAPIPlusJSONObject *GetNetworks200ApplicationVndAPIPlusJSON
	GetNetworks400ApplicationVndAPIPlusJSONObject *GetNetworks400ApplicationVndAPIPlusJSON
}
