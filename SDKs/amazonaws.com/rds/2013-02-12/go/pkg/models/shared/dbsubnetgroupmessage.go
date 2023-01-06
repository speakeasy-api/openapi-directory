package shared

type DbSubnetGroupMessage struct {
	DBSubnetGroups []DbSubnetGroups
	Marker         *string
}
