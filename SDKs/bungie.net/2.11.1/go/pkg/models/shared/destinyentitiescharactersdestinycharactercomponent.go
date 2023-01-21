package shared

import (
	"time"
)

// DestinyEntitiesCharactersDestinyCharacterComponentEmblemColor
// Represents a color whose RGBA values are all represented as values between 0 and 255.
type DestinyEntitiesCharactersDestinyCharacterComponentEmblemColor struct {
	Alpha *string
	Blue  *string
	Green *string
	Red   *string
}

// DestinyEntitiesCharactersDestinyCharacterComponentLevelProgression
// Information about a current character's status with a Progression. A progression is a value that can increase with activity and has levels. Think Character Level and Reputation Levels. Combine this "live" data with the related DestinyProgressionDefinition for a full picture of the Progression.
type DestinyEntitiesCharactersDestinyCharacterComponentLevelProgression struct {
	CurrentProgress     *int32
	CurrentResetCount   *int32
	DailyLimit          *int32
	DailyProgress       *int32
	Level               *int32
	LevelCap            *int32
	NextLevelAt         *int32
	ProgressToNextLevel *int32
	ProgressionHash     *int64
	RewardItemStates    []int32
	SeasonResets        []DestinyDestinyProgressionResetEntry
	StepIndex           *int32
	WeeklyLimit         *int32
	WeeklyProgress      *int32
}

// DestinyEntitiesCharactersDestinyCharacterComponent
// This component contains base properties of the character. You'll probably want to always request this component, but hey you do you.
type DestinyEntitiesCharactersDestinyCharacterComponent struct {
	BaseCharacterLevel       *int32
	CharacterID              *int64
	ClassHash                *int64
	ClassType                *int32
	DateLastPlayed           *time.Time
	EmblemBackgroundPath     *string
	EmblemColor              *DestinyEntitiesCharactersDestinyCharacterComponentEmblemColor
	EmblemHash               *int64
	EmblemPath               *string
	GenderHash               *int64
	GenderType               *int32
	LevelProgression         *DestinyEntitiesCharactersDestinyCharacterComponentLevelProgression
	Light                    *int32
	MembershipID             *int64
	MembershipType           *int32
	MinutesPlayedThisSession *int64
	MinutesPlayedTotal       *int64
	PercentToNextLevel       *float32
	RaceHash                 *int64
	RaceType                 *int32
	Stats                    map[string]int32
	TitleRecordHash          *int64
}
