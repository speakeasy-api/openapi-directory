package shared

// DbEngineVersionList
//
//	This data type is used as a response element in the action <a>DescribeDBEngineVersions</a>.
type DbEngineVersionList struct {
	DBEngineDescription                *string
	DBEngineVersionDescription         *string
	DBParameterGroupFamily             *string
	DefaultCharacterSet                *CharacterSet
	Engine                             *string
	EngineVersion                      *string
	ExportableLogTypes                 []string
	SupportedCharacterSets             []SupportedCharacterSetsList
	SupportedTimezones                 []SupportedTimezonesList
	SupportsLogExportsToCloudwatchLogs *bool
	SupportsReadReplica                *bool
	ValidUpgradeTarget                 []ValidUpgradeTargetList
}
