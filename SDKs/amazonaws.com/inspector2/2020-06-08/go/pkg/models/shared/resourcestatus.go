// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// ResourceStatus - Details the status of Amazon Inspector for each resource type Amazon Inspector scans.
type ResourceStatus struct {
	Ec2    StatusEnum  `json:"ec2"`
	Ecr    StatusEnum  `json:"ecr"`
	Lambda *StatusEnum `json:"lambda,omitempty"`
}
