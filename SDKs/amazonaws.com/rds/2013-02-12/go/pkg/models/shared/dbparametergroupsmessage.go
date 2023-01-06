package shared

type DbParameterGroupsMessage struct {
	DBParameterGroups []map[string]interface{}
	Marker            *string
}
