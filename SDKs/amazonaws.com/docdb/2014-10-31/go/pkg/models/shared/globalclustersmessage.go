package shared

type GlobalClustersMessage struct {
	GlobalClusters []GlobalClusterList
	Marker         *string
}
