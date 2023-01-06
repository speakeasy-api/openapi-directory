package shared

type DbClusterMessage struct {
	DBClusters []map[string]interface{}
	Marker     *string
}
