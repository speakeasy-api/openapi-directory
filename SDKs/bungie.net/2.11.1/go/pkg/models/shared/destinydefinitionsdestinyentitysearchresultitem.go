package shared

// DestinyDefinitionsDestinyEntitySearchResultItemDisplayProperties
// Many Destiny*Definition contracts - the "first order" entities of Destiny that have their own tables in the Manifest Database - also have displayable information. This is the base class for that display information.
type DestinyDefinitionsDestinyEntitySearchResultItemDisplayProperties struct {
	Description   *string
	HasIcon       *bool
	HighResIcon   *string
	Icon          *string
	IconSequences []DestinyDefinitionsCommonDestinyIconSequenceDefinition
	Name          *string
}

// DestinyDefinitionsDestinyEntitySearchResultItem
// An individual Destiny Entity returned from the entity search.
type DestinyDefinitionsDestinyEntitySearchResultItem struct {
	DisplayProperties *DestinyDefinitionsDestinyEntitySearchResultItemDisplayProperties
	EntityType        *string
	Hash              *int64
	Weight            *float64
}
