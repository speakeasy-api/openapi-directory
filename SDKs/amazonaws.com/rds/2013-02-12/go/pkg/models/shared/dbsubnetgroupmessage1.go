package shared

type DbSubnetGroupMessage1 struct {
	DBSubnetGroups []map[string]interface{}
	Marker         *string
}
