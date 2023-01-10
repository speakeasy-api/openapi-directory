package shared

// DbSubnetGroups
// Detailed information about a subnet group.
type DbSubnetGroups struct {
	DBSubnetGroupArn         *string
	DBSubnetGroupDescription *string
	DBSubnetGroupName        *string
	SubnetGroupStatus        *string
	Subnets                  []SubnetList
	VpcID                    *string
}
