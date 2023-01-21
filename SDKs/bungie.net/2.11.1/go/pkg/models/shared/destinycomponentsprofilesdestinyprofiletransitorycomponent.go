package shared

import (
	"time"
)

// DestinyComponentsProfilesDestinyProfileTransitoryComponentCurrentActivity
// If you are playing in an activity, this is some information about it.
// Note that we cannot guarantee any of this resembles what ends up in the PGCR in any way. They are sourced by two entirely separate systems with their own logic, and the one we source this data from should be considered non-authoritative in comparison.
type DestinyComponentsProfilesDestinyProfileTransitoryComponentCurrentActivity struct {
	EndTime                     *time.Time
	HighestOpposingFactionScore *float32
	NumberOfOpponents           *int32
	NumberOfPlayers             *int32
	Score                       *float32
	StartTime                   *time.Time
}

// DestinyComponentsProfilesDestinyProfileTransitoryComponentJoinability
// Some basic information about whether you can be joined, how many slots are left etc. Note that this can change quickly, so it may not actually be useful. But perhaps it will be in some use cases?
type DestinyComponentsProfilesDestinyProfileTransitoryComponentJoinability struct {
	ClosedReasons  *int32
	OpenSlots      *int32
	PrivacySetting *int32
}

// DestinyComponentsProfilesDestinyProfileTransitoryComponent
// This is an experimental set of data that Bungie considers to be "transitory" - information that may be useful for API users, but that is coming from a non-authoritative data source about information that could potentially change at a more frequent pace than Bungie.net will receive updates about it.
// This information is provided exclusively for convenience should any of it be useful to users: we provide no guarantees to the accuracy or timeliness of data that comes from this source. Know that this data can potentially be out-of-date or even wrong entirely if the user disconnected from the game or suddenly changed their status before we can receive refreshed data.
type DestinyComponentsProfilesDestinyProfileTransitoryComponent struct {
	CurrentActivity            *DestinyComponentsProfilesDestinyProfileTransitoryComponentCurrentActivity
	Joinability                *DestinyComponentsProfilesDestinyProfileTransitoryComponentJoinability
	LastOrbitedDestinationHash *int64
	PartyMembers               []DestinyComponentsProfilesDestinyProfileTransitoryPartyMember
	Tracking                   []DestinyComponentsProfilesDestinyProfileTransitoryTrackingEntry
}
