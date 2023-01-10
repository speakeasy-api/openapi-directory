package shared

type DbEngineVersionList struct {
	DBEngineDescription        *string
	DBEngineVersionDescription *string
	DBParameterGroupFamily     *string
	DefaultCharacterSet        *CharacterSet
	Engine                     *string
	EngineVersion              *string
	SupportedCharacterSets     []SupportedCharacterSetsList
}
