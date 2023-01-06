package shared

// ChannelCatalogProductsCounters
// The channel catalog products counters. For each counter you will have a count.
type ChannelCatalogProductsCounters struct {
	DisabledProductCountExcludingUncategorized            *int32 `json:"disabledProductCountExcludingUncategorized,omitempty"`
	DisabledProductCountIncludingUncategorized            *int32 `json:"disabledProductCountIncludingUncategorized,omitempty"`
	ExcludedProductCountExcludingUncategorizedAndDisabled *int32 `json:"excludedProductCountExcludingUncategorizedAndDisabled,omitempty"`
	ExcludedProductCountIncludingUncategorizedAndDisabled *int32 `json:"excludedProductCountIncludingUncategorizedAndDisabled,omitempty"`
	ExistingProductCount                                  *int32 `json:"existingProductCount,omitempty"`
	UncategorizedProductCount                             *int32 `json:"uncategorizedProductCount,omitempty"`
}
