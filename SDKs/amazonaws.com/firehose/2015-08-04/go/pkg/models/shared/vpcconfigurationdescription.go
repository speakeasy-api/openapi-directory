package shared

// VpcConfigurationDescription
// The details of the VPC of the Amazon ES destination.
type VpcConfigurationDescription struct {
	RoleARN          string   `json:"RoleARN"`
	SecurityGroupIds []string `json:"SecurityGroupIds"`
	SubnetIds        []string `json:"SubnetIds"`
	VpcID            string   `json:"VpcId"`
}
