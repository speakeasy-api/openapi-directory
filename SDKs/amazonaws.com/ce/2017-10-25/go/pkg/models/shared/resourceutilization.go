package shared

// ResourceUtilization
// Resource utilization of current resource.
type ResourceUtilization struct {
	Ec2ResourceUtilization *Ec2ResourceUtilization `json:"EC2ResourceUtilization,omitempty"`
}
