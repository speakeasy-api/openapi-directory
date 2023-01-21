package shared

import (
	"time"
)

// DestinyHistoricalStatsDestinyPostGameCarnageReportDataActivityDetails
// Summary information about the activity that was played.
type DestinyHistoricalStatsDestinyPostGameCarnageReportDataActivityDetails struct {
	DirectorActivityHash *int64
	InstanceID           *int64
	IsPrivate            *bool
	MembershipType       *int32
	Mode                 *int32
	Modes                []int32
	ReferenceID          *int64
}

type DestinyHistoricalStatsDestinyPostGameCarnageReportData struct {
	ActivityDetails    *DestinyHistoricalStatsDestinyPostGameCarnageReportDataActivityDetails
	Entries            []DestinyHistoricalStatsDestinyPostGameCarnageReportEntry
	Period             *time.Time
	StartingPhaseIndex *int32
	Teams              []DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntry
}
