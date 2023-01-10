package shared

// SupportedCharacterSetsList
//
//	This data type is used as a response element in the action <code>DescribeDBEngineVersions</code>.
type SupportedCharacterSetsList struct {
	CharacterSetDescription *string
	CharacterSetName        *string
}
