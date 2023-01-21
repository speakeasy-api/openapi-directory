package shared

import (
	"time"
)

// DestinyHistoricalStatsDestinyHistoricalStatsPeriodGroupActivityDetails
// Summary information about the activity that was played.
type DestinyHistoricalStatsDestinyHistoricalStatsPeriodGroupActivityDetails struct {
	DirectorActivityHash *int64
	InstanceID           *int64
	IsPrivate            *bool
	MembershipType       *int32
	Mode                 *int32
	Modes                []int32
	ReferenceID          *int64
}

type DestinyHistoricalStatsDestinyHistoricalStatsPeriodGroup struct {
	ActivityDetails *DestinyHistoricalStatsDestinyHistoricalStatsPeriodGroupActivityDetails
	Period          *time.Time
	Values          map[string]DestinyHistoricalStatsDestinyHistoricalStatsValue
}
