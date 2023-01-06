package shared

// PutPipelineDefinitionOutput
// Contains the output of PutPipelineDefinition.
type PutPipelineDefinitionOutput struct {
	Errored            map[string]interface{} `json:"errored"`
	ValidationErrors   []ValidationError      `json:"validationErrors,omitempty"`
	ValidationWarnings []ValidationWarning    `json:"validationWarnings,omitempty"`
}
