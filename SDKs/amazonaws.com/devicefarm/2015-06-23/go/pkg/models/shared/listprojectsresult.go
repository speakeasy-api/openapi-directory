package shared

// ListProjectsResult
// Represents the result of a list projects request.
type ListProjectsResult struct {
	NextToken *string    `json:"nextToken,omitempty"`
	Projects  []Project1 `json:"projects,omitempty"`
}
