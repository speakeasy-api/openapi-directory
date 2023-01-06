package shared

type DescribeWorkspacesResult struct {
	NextToken  *string      `json:"NextToken,omitempty"`
	Workspaces []Workspace1 `json:"Workspaces,omitempty"`
}
