package shared

type ClusterDbRevisionsMessage struct {
	ClusterDbRevisions []ClusterDbRevisionsList
	Marker             *string
}
