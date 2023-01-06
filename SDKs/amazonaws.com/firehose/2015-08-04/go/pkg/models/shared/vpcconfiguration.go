package shared

// VpcConfiguration
// The details of the VPC of the Amazon ES destination.
type VpcConfiguration struct {
	RoleARN          string   `json:"RoleARN"`
	SecurityGroupIds []string `json:"SecurityGroupIds"`
	SubnetIds        []string `json:"SubnetIds"`
}
