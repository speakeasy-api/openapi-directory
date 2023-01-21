package shared

type APICoreDtoAccountingConversionOptions struct {
	HideComCost       *bool  `json:"hideComCost,omitempty"`
	HideCost          *bool  `json:"hideCost,omitempty"`
	HideCount         *bool  `json:"hideCount,omitempty"`
	HideParams        *bool  `json:"hideParams,omitempty"`
	HideValue         *bool  `json:"hideValue,omitempty"`
	PercentCommission *int32 `json:"percentCommission,omitempty"`
	PercentValue      *int32 `json:"percentValue,omitempty"`
}
