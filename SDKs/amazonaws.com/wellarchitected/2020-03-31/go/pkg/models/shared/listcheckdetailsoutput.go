// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// ListCheckDetailsOutput - Success
type ListCheckDetailsOutput struct {
	CheckDetails []CheckDetail `json:"CheckDetails,omitempty"`
	// The token to use to retrieve the next set of results.
	NextToken *string `json:"NextToken,omitempty"`
}
