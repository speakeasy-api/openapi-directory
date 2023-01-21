package shared

type GetSavingsPlansUtilizationDetailsResponse struct {
	NextToken                      *string                            `json:"NextToken,omitempty"`
	SavingsPlansUtilizationDetails []SavingsPlansUtilizationDetail    `json:"SavingsPlansUtilizationDetails"`
	TimePeriod                     DateInterval                       `json:"TimePeriod"`
	Total                          *SavingsPlansUtilizationAggregates `json:"Total,omitempty"`
}
