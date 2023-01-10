package shared

type DescribeDbLogFilesResponse struct {
	DescribeDBLogFiles []DescribeDbLogFilesList
	Marker             *string
}
