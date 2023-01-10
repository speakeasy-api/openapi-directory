package shared

type DbParameterGroupsMessage struct {
	DBParameterGroups []DbParameterGroupList
	Marker            *string
}
