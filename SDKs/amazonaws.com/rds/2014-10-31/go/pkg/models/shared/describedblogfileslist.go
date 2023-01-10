package shared

// DescribeDbLogFilesList
// This data type is used as a response element to <code>DescribeDBLogFiles</code>.
type DescribeDbLogFilesList struct {
	LastWritten *int64
	LogFileName *string
	Size        *int64
}
