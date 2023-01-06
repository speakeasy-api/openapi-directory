package shared

type ListObjectAttributesResponse struct {
	Attributes map[string]interface{} `json:"Attributes,omitempty"`
	NextToken  *string                `json:"NextToken,omitempty"`
}
