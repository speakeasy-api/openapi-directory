package shared

type DbSecurityGroupMessage struct {
	DBSecurityGroups []map[string]interface{}
	Marker           *string
}
