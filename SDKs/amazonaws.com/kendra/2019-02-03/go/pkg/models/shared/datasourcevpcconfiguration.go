package shared

// DataSourceVpcConfiguration
// Provides information for connecting to an Amazon VPC.
type DataSourceVpcConfiguration struct {
	SecurityGroupIds []string `json:"SecurityGroupIds"`
	SubnetIds        []string `json:"SubnetIds"`
}
