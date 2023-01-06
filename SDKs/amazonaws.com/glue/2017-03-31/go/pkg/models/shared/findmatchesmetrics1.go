package shared

// FindMatchesMetrics1
// The evaluation metrics for the find matches algorithm. The quality of your machine learning transform is measured by getting your transform to predict some matches and comparing the results to known matches from the same dataset. The quality metrics are based on a subset of your data, so they are not precise.
type FindMatchesMetrics1 struct {
	AreaUnderPRCurve  *float64               `json:"AreaUnderPRCurve,omitempty"`
	ColumnImportances map[string]interface{} `json:"ColumnImportances,omitempty"`
	ConfusionMatrix   *ConfusionMatrix       `json:"ConfusionMatrix,omitempty"`
	F1                *float64               `json:"F1,omitempty"`
	Precision         *float64               `json:"Precision,omitempty"`
	Recall            *float64               `json:"Recall,omitempty"`
}
