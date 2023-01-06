package shared

// PipelineExecution
// Represents information about an execution of a pipeline.
type PipelineExecution struct {
	ArtifactRevisions   []ArtifactRevision           `json:"artifactRevisions,omitempty"`
	PipelineExecutionID *string                      `json:"pipelineExecutionId,omitempty"`
	PipelineName        map[string]interface{}       `json:"pipelineName,omitempty"`
	PipelineVersion     *int64                       `json:"pipelineVersion,omitempty"`
	Status              *PipelineExecutionStatusEnum `json:"status,omitempty"`
	StatusSummary       *string                      `json:"statusSummary,omitempty"`
}
