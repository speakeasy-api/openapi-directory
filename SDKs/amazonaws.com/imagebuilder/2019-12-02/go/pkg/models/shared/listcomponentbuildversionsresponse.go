// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// ListComponentBuildVersionsResponse - Success
type ListComponentBuildVersionsResponse struct {
	ComponentSummaryList []ComponentSummary `json:"componentSummaryList,omitempty"`
	NextToken            *string            `json:"nextToken,omitempty"`
	RequestID            *string            `json:"requestId,omitempty"`
}
