package shared

type DescribeWorkspaceBundlesResult struct {
	Bundles   []WorkspaceBundle1 `json:"Bundles,omitempty"`
	NextToken *string            `json:"NextToken,omitempty"`
}
