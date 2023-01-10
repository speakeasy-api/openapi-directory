package shared

// DbEngineVersionList
//
//	This data type is used as a response element in the action <code>DescribeDBEngineVersions</code>.
type DbEngineVersionList struct {
	DBEngineDescription                *string
	DBEngineVersionDescription         *string
	DBParameterGroupFamily             *string
	DefaultCharacterSet                *CharacterSet
	Engine                             *string
	EngineVersion                      *string
	ExportableLogTypes                 []string
	Status                             *string
	SupportedCharacterSets             []SupportedCharacterSetsList
	SupportedEngineModes               []string
	SupportedFeatureNames              []string
	SupportedNcharCharacterSets        []SupportedCharacterSetsList
	SupportedTimezones                 []SupportedTimezonesList
	SupportsGlobalDatabases            *bool
	SupportsLogExportsToCloudwatchLogs *bool
	SupportsParallelQuery              *bool
	SupportsReadReplica                *bool
	ValidUpgradeTarget                 []ValidUpgradeTargetList
}
