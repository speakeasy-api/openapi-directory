// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

type DBSecurityGroups struct {
	DBSecurityGroupDescription *string
	DBSecurityGroupName        *string
	Ec2SecurityGroups          []Ec2SecurityGroupList
	IPRanges                   []IPRangeList
	OwnerID                    *string
	VpcID                      *string
}
