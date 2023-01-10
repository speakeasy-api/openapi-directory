package shared

// DescribeDbLogFilesResponse
//
//	The response from a call to <code>DescribeDBLogFiles</code>.
type DescribeDbLogFilesResponse struct {
	DescribeDBLogFiles []DescribeDbLogFilesList
	Marker             *string
}
