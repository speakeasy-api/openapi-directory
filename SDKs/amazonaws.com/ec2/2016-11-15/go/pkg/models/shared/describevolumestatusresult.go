package shared

type DescribeVolumeStatusResult struct {
	NextToken      map[string]interface{}
	VolumeStatuses map[string]interface{}
}
