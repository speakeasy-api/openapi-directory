package shared

type DescribeSourceServersResponse struct {
	Items     []SourceServer         `json:"items,omitempty"`
	NextToken map[string]interface{} `json:"nextToken,omitempty"`
}
