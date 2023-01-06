package shared

type DbClusterParameterGroupDetails struct {
	Marker     *string
	Parameters []map[string]interface{}
}
