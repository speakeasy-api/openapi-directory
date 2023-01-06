package shared

// ExperimentSummary
// Provides a summary of an experiment.
type ExperimentSummary struct {
	CreationTime         map[string]interface{} `json:"creationTime,omitempty"`
	ExperimentTemplateID *string                `json:"experimentTemplateId,omitempty"`
	ID                   *string                `json:"id,omitempty"`
	State                *ExperimentState       `json:"state,omitempty"`
	Tags                 map[string]string      `json:"tags,omitempty"`
}
