// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

type SetSubnetsInput struct {
	IPAddressType   *IPAddressTypeEnum
	LoadBalancerArn string
	SubnetMappings  []SubnetMapping
	Subnets         []string
}
