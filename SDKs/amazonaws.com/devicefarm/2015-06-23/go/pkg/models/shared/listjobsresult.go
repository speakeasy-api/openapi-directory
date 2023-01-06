package shared

// ListJobsResult
// Represents the result of a list jobs request.
type ListJobsResult struct {
	Jobs      []Job1  `json:"jobs,omitempty"`
	NextToken *string `json:"nextToken,omitempty"`
}
