package shared

type DbSubnetGroup1 struct {
	DBSubnetGroupDescription *string
	DBSubnetGroupName        *string
	SubnetGroupStatus        *string
	Subnets                  []map[string]interface{}
	VpcID                    *string
}
