package shared

type DbSubnetGroupMessage struct {
	DBSubnetGroups []map[string]interface{}
	Marker         *string
}
