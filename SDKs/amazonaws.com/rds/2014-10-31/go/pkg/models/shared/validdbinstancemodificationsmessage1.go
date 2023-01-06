package shared

// ValidDbInstanceModificationsMessage1
// Information about valid modifications that you can make to your DB instance. Contains the result of a successful call to the <code>DescribeValidDBInstanceModifications</code> action. You can use this information when you call <code>ModifyDBInstance</code>.
type ValidDbInstanceModificationsMessage1 struct {
	Storage                map[string]interface{}
	ValidProcessorFeatures []map[string]interface{}
}
