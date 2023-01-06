package shared

type DbSubnetGroup struct {
	DBSubnetGroupDescription *string
	DBSubnetGroupName        *string
	SubnetGroupStatus        *string
	Subnets                  []map[string]interface{}
	VpcID                    *string
}
