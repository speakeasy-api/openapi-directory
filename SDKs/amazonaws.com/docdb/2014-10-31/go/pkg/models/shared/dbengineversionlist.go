package shared

// DbEngineVersionList
//
//	Detailed information about an engine version.
type DbEngineVersionList struct {
	DBEngineDescription                *string
	DBEngineVersionDescription         *string
	DBParameterGroupFamily             *string
	Engine                             *string
	EngineVersion                      *string
	ExportableLogTypes                 []string
	SupportsLogExportsToCloudwatchLogs *bool
	ValidUpgradeTarget                 []ValidUpgradeTargetList
}
