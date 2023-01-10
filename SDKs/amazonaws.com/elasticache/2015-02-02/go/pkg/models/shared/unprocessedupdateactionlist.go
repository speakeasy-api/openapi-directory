package shared

// UnprocessedUpdateActionList
// Update action that has failed to be processed for the corresponding apply/stop request
type UnprocessedUpdateActionList struct {
	CacheClusterID     *string
	ErrorMessage       *string
	ErrorType          *string
	ReplicationGroupID *string
	ServiceUpdateName  *string
}
