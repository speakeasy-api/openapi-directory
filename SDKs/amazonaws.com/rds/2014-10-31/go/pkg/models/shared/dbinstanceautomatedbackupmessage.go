package shared

// DbInstanceAutomatedBackupMessage
//
//	Contains the result of a successful invocation of the <code>DescribeDBInstanceAutomatedBackups</code> action.
type DbInstanceAutomatedBackupMessage struct {
	DBInstanceAutomatedBackups []map[string]interface{}
	Marker                     *string
}
