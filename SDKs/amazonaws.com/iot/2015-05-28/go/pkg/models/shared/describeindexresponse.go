// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// DescribeIndexResponse - Success
type DescribeIndexResponse struct {
	IndexName   *string          `json:"indexName,omitempty"`
	IndexStatus *IndexStatusEnum `json:"indexStatus,omitempty"`
	Schema      *string          `json:"schema,omitempty"`
}
