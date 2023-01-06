package shared

type DescribeVolumesResult struct {
	NextToken map[string]interface{}
	Volumes   map[string]interface{}
}
