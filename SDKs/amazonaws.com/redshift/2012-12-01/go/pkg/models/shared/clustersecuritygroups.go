package shared

// ClusterSecurityGroups
// Describes a security group.
type ClusterSecurityGroups struct {
	ClusterSecurityGroupName *string
	Description              *string
	Ec2SecurityGroups        []map[string]interface{}
	IPRanges                 []map[string]interface{}
	Tags                     []map[string]interface{}
}
