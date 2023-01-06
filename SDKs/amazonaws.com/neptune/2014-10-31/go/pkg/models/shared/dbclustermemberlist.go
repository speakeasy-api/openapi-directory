package shared

// DbClusterMemberList
// Contains information about an instance that is part of a DB cluster.
type DbClusterMemberList struct {
	DBClusterParameterGroupStatus *string
	DBInstanceIdentifier          *string
	IsClusterWriter               *bool
	PromotionTier                 *int64
}
