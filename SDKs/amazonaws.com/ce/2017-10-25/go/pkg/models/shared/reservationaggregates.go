package shared

// ReservationAggregates
// The aggregated numbers for your reservation usage.
type ReservationAggregates struct {
	AmortizedRecurringFee        *string `json:"AmortizedRecurringFee,omitempty"`
	AmortizedUpfrontFee          *string `json:"AmortizedUpfrontFee,omitempty"`
	NetRISavings                 *string `json:"NetRISavings,omitempty"`
	OnDemandCostOfRIHoursUsed    *string `json:"OnDemandCostOfRIHoursUsed,omitempty"`
	PurchasedHours               *string `json:"PurchasedHours,omitempty"`
	PurchasedUnits               *string `json:"PurchasedUnits,omitempty"`
	RICostForUnusedHours         *string `json:"RICostForUnusedHours,omitempty"`
	RealizedSavings              *string `json:"RealizedSavings,omitempty"`
	TotalActualHours             *string `json:"TotalActualHours,omitempty"`
	TotalActualUnits             *string `json:"TotalActualUnits,omitempty"`
	TotalAmortizedFee            *string `json:"TotalAmortizedFee,omitempty"`
	TotalPotentialRISavings      *string `json:"TotalPotentialRISavings,omitempty"`
	UnrealizedSavings            *string `json:"UnrealizedSavings,omitempty"`
	UnusedHours                  *string `json:"UnusedHours,omitempty"`
	UnusedUnits                  *string `json:"UnusedUnits,omitempty"`
	UtilizationPercentage        *string `json:"UtilizationPercentage,omitempty"`
	UtilizationPercentageInUnits *string `json:"UtilizationPercentageInUnits,omitempty"`
}
