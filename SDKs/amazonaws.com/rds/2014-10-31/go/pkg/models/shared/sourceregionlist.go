package shared

// SourceRegionList
// Contains an Amazon Web Services Region name as the result of a successful call to the <code>DescribeSourceRegions</code> action.
type SourceRegionList struct {
	Endpoint                                      *string
	RegionName                                    *string
	Status                                        *string
	SupportsDBInstanceAutomatedBackupsReplication *bool
}
