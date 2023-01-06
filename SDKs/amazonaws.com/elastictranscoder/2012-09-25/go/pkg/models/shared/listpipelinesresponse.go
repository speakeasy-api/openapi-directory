package shared

// ListPipelinesResponse
// A list of the pipelines associated with the current AWS account.
type ListPipelinesResponse struct {
	NextPageToken map[string]interface{} `json:"NextPageToken,omitempty"`
	Pipelines     []Pipeline             `json:"Pipelines,omitempty"`
}
