package shared

// ClusterPendingUpdates
// A list of updates being applied to the cluster
type ClusterPendingUpdates struct {
	ACLs           *AcLsUpdateStatus              `json:"ACLs,omitempty"`
	Resharding     *ReshardingStatus              `json:"Resharding,omitempty"`
	ServiceUpdates []PendingModifiedServiceUpdate `json:"ServiceUpdates,omitempty"`
}
