package shared

type DbClusterEndpointMessage struct {
	DBClusterEndpoints []DbClusterEndpointList
	Marker             *string
}
