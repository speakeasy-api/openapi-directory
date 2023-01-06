package shared

// ClusterSecurityGroup
// Describes a security group.
type ClusterSecurityGroup struct {
	ClusterSecurityGroupName *string
	Description              *string
	Ec2SecurityGroups        []map[string]interface{}
	IPRanges                 []map[string]interface{}
	Tags                     []map[string]interface{}
}
