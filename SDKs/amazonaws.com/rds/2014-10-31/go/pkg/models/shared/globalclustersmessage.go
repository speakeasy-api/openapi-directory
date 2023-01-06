package shared

type GlobalClustersMessage struct {
	GlobalClusters []map[string]interface{}
	Marker         *string
}
