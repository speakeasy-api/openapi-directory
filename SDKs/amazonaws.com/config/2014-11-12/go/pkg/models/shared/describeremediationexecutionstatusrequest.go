// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

type DescribeRemediationExecutionStatusRequest struct {
	ConfigRuleName string        `json:"ConfigRuleName"`
	Limit          *int64        `json:"Limit,omitempty"`
	NextToken      *string       `json:"NextToken,omitempty"`
	ResourceKeys   []ResourceKey `json:"ResourceKeys,omitempty"`
}
