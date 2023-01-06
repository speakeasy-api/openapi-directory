package shared

type ListBackendJobsResponse struct {
	Jobs      map[string]interface{} `json:"Jobs,omitempty"`
	NextToken map[string]interface{} `json:"NextToken,omitempty"`
}
