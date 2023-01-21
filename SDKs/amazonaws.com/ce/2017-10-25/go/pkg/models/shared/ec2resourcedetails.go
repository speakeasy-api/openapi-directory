package shared

// Ec2ResourceDetails
// Details on the Amazon EC2 Resource.
type Ec2ResourceDetails struct {
	HourlyOnDemandRate *string `json:"HourlyOnDemandRate,omitempty"`
	InstanceType       *string `json:"InstanceType,omitempty"`
	Memory             *string `json:"Memory,omitempty"`
	NetworkPerformance *string `json:"NetworkPerformance,omitempty"`
	Platform           *string `json:"Platform,omitempty"`
	Region             *string `json:"Region,omitempty"`
	Sku                *string `json:"Sku,omitempty"`
	Storage            *string `json:"Storage,omitempty"`
	Vcpu               *string `json:"Vcpu,omitempty"`
}
