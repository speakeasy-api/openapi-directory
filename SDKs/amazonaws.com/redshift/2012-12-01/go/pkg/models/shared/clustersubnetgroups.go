package shared

// ClusterSubnetGroups
// Describes a subnet group.
type ClusterSubnetGroups struct {
	ClusterSubnetGroupName *string
	Description            *string
	SubnetGroupStatus      *string
	Subnets                []SubnetList
	Tags                   []TagList
	VpcID                  *string
}
