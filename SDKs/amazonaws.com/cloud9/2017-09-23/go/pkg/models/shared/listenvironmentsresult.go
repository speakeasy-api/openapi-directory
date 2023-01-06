package shared

type ListEnvironmentsResult struct {
	EnvironmentIds []string               `json:"environmentIds,omitempty"`
	NextToken      map[string]interface{} `json:"nextToken,omitempty"`
}
