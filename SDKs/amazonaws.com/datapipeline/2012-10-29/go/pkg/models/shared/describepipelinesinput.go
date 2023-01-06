package shared

// DescribePipelinesInput
// Contains the parameters for DescribePipelines.
type DescribePipelinesInput struct {
	PipelineIds map[string]interface{} `json:"pipelineIds"`
}
