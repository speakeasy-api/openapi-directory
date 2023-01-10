package shared

// ClusterSubnetGroup
// Describes a subnet group.
type ClusterSubnetGroup struct {
	ClusterSubnetGroupName *string
	Description            *string
	SubnetGroupStatus      *string
	Subnets                []SubnetList
	Tags                   []TagList
	VpcID                  *string
}
