package shared

// SnapshotScheduleList
// Describes a snapshot schedule. You can set a regular interval for creating snapshots of a cluster. You can also schedule snapshots for specific dates.
type SnapshotScheduleList struct {
	AssociatedClusterCount *int64
	AssociatedClusters     []AssociatedClusterList
	NextInvocations        []map[string]interface{}
	ScheduleDefinitions    []map[string]interface{}
	ScheduleDescription    *string
	ScheduleIdentifier     *string
	Tags                   []TagList
}
