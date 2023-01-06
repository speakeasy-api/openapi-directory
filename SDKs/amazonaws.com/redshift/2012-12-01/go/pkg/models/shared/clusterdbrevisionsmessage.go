package shared

type ClusterDbRevisionsMessage struct {
	ClusterDbRevisions []map[string]interface{}
	Marker             *string
}
