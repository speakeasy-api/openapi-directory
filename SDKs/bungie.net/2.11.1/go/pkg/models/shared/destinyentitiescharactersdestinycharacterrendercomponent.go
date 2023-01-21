package shared

// DestinyEntitiesCharactersDestinyCharacterRenderComponentCustomization
// Raw data about the customization options chosen for a character's face and appearance.
// You can look up the relevant class/race/gender combo in DestinyCharacterCustomizationOptionDefinition for the character, and then look up these values within the CustomizationOptions found to pull some data about their choices. Warning: not all of that data is meaningful. Some data has useful icons. Others have nothing, and are only meant for 3D rendering purposes (which we sadly do not expose yet)
type DestinyEntitiesCharactersDestinyCharacterRenderComponentCustomization struct {
	DecalColor    *int64
	DecalIndex    *int32
	EyeColor      *int64
	Face          *int64
	FeatureColors []int64
	FeatureIndex  *int32
	HairColors    []int64
	HairIndex     *int32
	LipColor      *int64
	Personality   *int64
	SkinColor     *int64
	WearHelmet    *bool
}

// DestinyEntitiesCharactersDestinyCharacterRenderComponentPeerView
// A minimal view of a character's equipped items, for the purpose of rendering a summary screen or showing the character in 3D.
type DestinyEntitiesCharactersDestinyCharacterRenderComponentPeerView struct {
	Equipment []DestinyCharacterDestinyItemPeerView
}

// DestinyEntitiesCharactersDestinyCharacterRenderComponent
// Only really useful if you're attempting to render the character's current appearance in 3D, this returns a bare minimum of information, pre-aggregated, that you'll need to perform that rendering. Note that you need to combine this with other 3D assets and data from our servers.
// Examine the Javascript returned by https://bungie.net/sharedbundle/spasm to see how we use this data, but be warned: the rabbit hole goes pretty deep.
type DestinyEntitiesCharactersDestinyCharacterRenderComponent struct {
	CustomDyes    []DestinyDyeReference
	Customization *DestinyEntitiesCharactersDestinyCharacterRenderComponentCustomization
	PeerView      *DestinyEntitiesCharactersDestinyCharacterRenderComponentPeerView
}
