package shared

// ContractStoreInfo
// Describe the store information related to the offer.
type ContractStoreInfo struct {
	AdditionalStorePrice *float64 `json:"additionalStorePrice,omitempty"`
	MaxStoreCount        *int32   `json:"maxStoreCount,omitempty"`
	MinStoreCount        *int32   `json:"minStoreCount,omitempty"`
	OwnedStoreCount      *int32   `json:"ownedStoreCount,omitempty"`
	StoreCount           *int32   `json:"storeCount,omitempty"`
	StoreIncluded        *int32   `json:"storeIncluded,omitempty"`
}
