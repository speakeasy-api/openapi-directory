// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// ListServiceTemplatesOutput - Success
type ListServiceTemplatesOutput struct {
	NextToken *string                  `json:"nextToken,omitempty"`
	Templates []ServiceTemplateSummary `json:"templates"`
}
