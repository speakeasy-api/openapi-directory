package shared

// MarketplaceChannelCatalogLovLinks
// Indicates the List Of Values related to the marketplace
type MarketplaceChannelCatalogLovLinks struct {
	CancelationReasonCodeLOV         *BeezUpCommonLovLink3 `json:"cancelationReasonCodeLOV,omitempty"`
	CarrierCodeLOV                   *BeezUpCommonLovLink3 `json:"carrierCodeLOV,omitempty"`
	MarketplaceStorePropertyGroupLOV *BeezUpCommonLovLink3 `json:"marketplaceStorePropertyGroupLOV,omitempty"`
	MarketplaceStorePropertyLOV      *BeezUpCommonLovLink3 `json:"marketplaceStorePropertyLOV,omitempty"`
	RefundReasonCodeLOV              *BeezUpCommonLovLink3 `json:"refundReasonCodeLOV,omitempty"`
	ShippingMethodLOV                *BeezUpCommonLovLink3 `json:"shippingMethodLOV,omitempty"`
}
