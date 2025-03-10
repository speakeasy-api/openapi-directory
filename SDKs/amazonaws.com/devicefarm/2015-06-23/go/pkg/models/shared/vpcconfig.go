// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// VpcConfig - Contains the VPC configuration data necessary to interface with AWS Device Farm's services.
type VpcConfig struct {
	SecurityGroupIds []string `json:"securityGroupIds"`
	SubnetIds        []string `json:"subnetIds"`
	VpcID            string   `json:"vpcId"`
}
