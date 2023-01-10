package shared

type DbClusterMessage struct {
	DBClusters []DbClusterList
	Marker     *string
}
