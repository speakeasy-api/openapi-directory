package shared

// ProcessedUpdateActionList
// Update action that has been processed for the corresponding apply/stop request
type ProcessedUpdateActionList struct {
	CacheClusterID     *string
	ReplicationGroupID *string
	ServiceUpdateName  *string
	UpdateActionStatus *UpdateActionStatusEnum
}
