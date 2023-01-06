package shared

// DescribeComplianceByResourceRequest
// <p/>
type DescribeComplianceByResourceRequest struct {
	ComplianceTypes map[string]interface{} `json:"ComplianceTypes,omitempty"`
	Limit           *int64                 `json:"Limit,omitempty"`
	NextToken       *string                `json:"NextToken,omitempty"`
	ResourceID      *string                `json:"ResourceId,omitempty"`
	ResourceType    map[string]interface{} `json:"ResourceType,omitempty"`
}
