package shared

type DescribeSnapshotSchedulesOutputMessage struct {
	Marker            *string
	SnapshotSchedules []map[string]interface{}
}
