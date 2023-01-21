package shared

// ServiceSpecification
// Hardware specifications for the service that you want recommendations for.
type ServiceSpecification struct {
	Ec2Specification *Ec2Specification `json:"EC2Specification,omitempty"`
}
