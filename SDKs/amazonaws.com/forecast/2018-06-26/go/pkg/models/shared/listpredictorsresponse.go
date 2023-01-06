package shared

type ListPredictorsResponse struct {
	NextToken  map[string]interface{} `json:"NextToken,omitempty"`
	Predictors []PredictorSummary     `json:"Predictors,omitempty"`
}
