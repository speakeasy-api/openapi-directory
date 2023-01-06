package shared

type DescribeDbLogFilesResponse struct {
	DescribeDBLogFiles []map[string]interface{}
	Marker             *string
}
