package shared

// SavingsPlansPurchaseRecommendationDetail
// Details for your recommended Savings Plans.
type SavingsPlansPurchaseRecommendationDetail struct {
	AccountID                                  *string              `json:"AccountId,omitempty"`
	CurrencyCode                               *string              `json:"CurrencyCode,omitempty"`
	CurrentAverageHourlyOnDemandSpend          *string              `json:"CurrentAverageHourlyOnDemandSpend,omitempty"`
	CurrentMaximumHourlyOnDemandSpend          *string              `json:"CurrentMaximumHourlyOnDemandSpend,omitempty"`
	CurrentMinimumHourlyOnDemandSpend          *string              `json:"CurrentMinimumHourlyOnDemandSpend,omitempty"`
	EstimatedAverageUtilization                *string              `json:"EstimatedAverageUtilization,omitempty"`
	EstimatedMonthlySavingsAmount              *string              `json:"EstimatedMonthlySavingsAmount,omitempty"`
	EstimatedOnDemandCost                      *string              `json:"EstimatedOnDemandCost,omitempty"`
	EstimatedOnDemandCostWithCurrentCommitment *string              `json:"EstimatedOnDemandCostWithCurrentCommitment,omitempty"`
	EstimatedROI                               *string              `json:"EstimatedROI,omitempty"`
	EstimatedSPCost                            *string              `json:"EstimatedSPCost,omitempty"`
	EstimatedSavingsAmount                     *string              `json:"EstimatedSavingsAmount,omitempty"`
	EstimatedSavingsPercentage                 *string              `json:"EstimatedSavingsPercentage,omitempty"`
	HourlyCommitmentToPurchase                 *string              `json:"HourlyCommitmentToPurchase,omitempty"`
	SavingsPlansDetails                        *SavingsPlansDetails `json:"SavingsPlansDetails,omitempty"`
	UpfrontCost                                *string              `json:"UpfrontCost,omitempty"`
}
