package shared

// ModelSummary
// Provides information about the specified ML model, including dataset and model names and ARNs, as well as status.
type ModelSummary struct {
	CreatedAt   map[string]interface{} `json:"CreatedAt,omitempty"`
	DatasetArn  *string                `json:"DatasetArn,omitempty"`
	DatasetName *string                `json:"DatasetName,omitempty"`
	ModelArn    *string                `json:"ModelArn,omitempty"`
	ModelName   *string                `json:"ModelName,omitempty"`
	Status      *ModelStatusEnum       `json:"Status,omitempty"`
}
