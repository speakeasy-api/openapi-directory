package shared

// ClusterSecurityGroups
// Describes a security group.
type ClusterSecurityGroups struct {
	ClusterSecurityGroupName *string
	Description              *string
	Ec2SecurityGroups        []Ec2SecurityGroupList
	IPRanges                 []IPRangeList
	Tags                     []TagList
}
