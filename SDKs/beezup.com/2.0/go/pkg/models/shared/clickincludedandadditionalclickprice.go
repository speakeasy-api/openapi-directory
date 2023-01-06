package shared

type ClickIncludedAndAdditionalClickPrice struct {
	AdditionalClickPrice *float64 `json:"additionalClickPrice,omitempty"`
	ClickIncluded        *int32   `json:"clickIncluded,omitempty"`
}
