// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// ListWorkspacesResponse - Success
type ListWorkspacesResponse struct {
	NextToken  *string            `json:"nextToken,omitempty"`
	Workspaces []WorkspaceSummary `json:"workspaces"`
}
