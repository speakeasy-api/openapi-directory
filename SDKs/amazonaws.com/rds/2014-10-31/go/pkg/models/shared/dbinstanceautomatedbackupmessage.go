package shared

// DbInstanceAutomatedBackupMessage
//
//	Contains the result of a successful invocation of the <code>DescribeDBInstanceAutomatedBackups</code> action.
type DbInstanceAutomatedBackupMessage struct {
	DBInstanceAutomatedBackups []DbInstanceAutomatedBackupList
	Marker                     *string
}
