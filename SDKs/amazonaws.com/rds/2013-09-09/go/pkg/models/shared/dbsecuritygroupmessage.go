package shared

type DbSecurityGroupMessage struct {
	DBSecurityGroups []DbSecurityGroups
	Marker           *string
}
