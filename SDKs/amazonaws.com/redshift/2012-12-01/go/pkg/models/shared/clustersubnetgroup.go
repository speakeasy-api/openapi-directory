package shared

// ClusterSubnetGroup
// Describes a subnet group.
type ClusterSubnetGroup struct {
	ClusterSubnetGroupName *string
	Description            *string
	SubnetGroupStatus      *string
	Subnets                []map[string]interface{}
	Tags                   []map[string]interface{}
	VpcID                  *string
}
