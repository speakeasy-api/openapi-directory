package shared

// DbSubnetGroup
// Detailed information about a subnet group.
type DbSubnetGroup struct {
	DBSubnetGroupArn         *string
	DBSubnetGroupDescription *string
	DBSubnetGroupName        *string
	SubnetGroupStatus        *string
	Subnets                  []SubnetList
	VpcID                    *string
}
