package shared

type GetSavingsPlansUtilizationResponse struct {
	SavingsPlansUtilizationsByTime []SavingsPlansUtilizationByTime   `json:"SavingsPlansUtilizationsByTime,omitempty"`
	Total                          SavingsPlansUtilizationAggregates `json:"Total"`
}
