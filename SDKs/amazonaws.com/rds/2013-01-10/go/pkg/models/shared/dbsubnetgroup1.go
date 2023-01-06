package shared

type DbSubnetGroup1 struct {
	DBSubnetGroupDescription *string
	DBSubnetGroupName        *string
	SubnetGroupStatus        *string
	Subnets                  []SubnetList
	VpcID                    *string
}
