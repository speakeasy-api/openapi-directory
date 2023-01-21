package shared

// DestinyComponentsProfilesDestinyProfileProgressionComponentSeasonalArtifact
// Represents a Seasonal Artifact and all data related to it for the requested Account.
// It can be combined with Character-scoped data for a full picture of what a character has available/has chosen, or just these settings can be used for overview information.
type DestinyComponentsProfilesDestinyProfileProgressionComponentSeasonalArtifact struct {
	ArtifactHash          *int64
	PointProgression      *DestinyDestinyProgression
	PointsAcquired        *int32
	PowerBonus            *int32
	PowerBonusProgression *DestinyDestinyProgression
}

// DestinyComponentsProfilesDestinyProfileProgressionComponent
// The set of progression-related information that applies at a Profile-wide level for your Destiny experience. This differs from the Jimi Hendrix Experience because there's less guitars on fire. Yet. #spoileralert?
// This will include information such as Checklist info.
type DestinyComponentsProfilesDestinyProfileProgressionComponent struct {
	Checklists       map[string]map[string]bool
	SeasonalArtifact *DestinyComponentsProfilesDestinyProfileProgressionComponentSeasonalArtifact
}
