package shared

// CacheParameterGroupStatus
// Status of the cache parameter group.
type CacheParameterGroupStatus struct {
	CacheNodeIdsToReboot    []map[string]interface{}
	CacheParameterGroupName *string
	ParameterApplyStatus    *string
}
