package shared

type DbParameterGroupDetails struct {
	Marker     *string
	Parameters []map[string]interface{}
}
