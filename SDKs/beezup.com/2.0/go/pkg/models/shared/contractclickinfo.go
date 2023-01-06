package shared

// ContractClickInfo
// Describe the click information related to the offer.
type ContractClickInfo struct {
	AdditionalClickPrice      *float64 `json:"additionalClickPrice,omitempty"`
	ClickIncluded             *int32   `json:"clickIncluded,omitempty"`
	InitialOfferClickIncluded *int32   `json:"initialOfferClickIncluded,omitempty"`
}
