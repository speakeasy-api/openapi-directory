package shared

type DbSubnetGroups struct {
	DBSubnetGroupDescription *string
	DBSubnetGroupName        *string
	SubnetGroupStatus        *string
	Subnets                  []map[string]interface{}
	VpcID                    *string
}
