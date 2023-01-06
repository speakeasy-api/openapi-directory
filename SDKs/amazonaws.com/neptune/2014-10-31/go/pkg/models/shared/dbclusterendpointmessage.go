package shared

type DbClusterEndpointMessage struct {
	DBClusterEndpoints []map[string]interface{}
	Marker             *string
}
