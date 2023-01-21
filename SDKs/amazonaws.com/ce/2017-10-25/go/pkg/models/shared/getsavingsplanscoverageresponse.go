package shared

type GetSavingsPlansCoverageResponse struct {
	NextToken             *string                `json:"NextToken,omitempty"`
	SavingsPlansCoverages []SavingsPlansCoverage `json:"SavingsPlansCoverages"`
}
