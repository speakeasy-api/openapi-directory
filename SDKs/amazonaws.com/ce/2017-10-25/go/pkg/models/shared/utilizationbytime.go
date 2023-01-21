package shared

// UtilizationByTime
// The amount of utilization, in hours.
type UtilizationByTime struct {
	Groups     []ReservationUtilizationGroup `json:"Groups,omitempty"`
	TimePeriod *DateInterval                 `json:"TimePeriod,omitempty"`
	Total      *ReservationAggregates        `json:"Total,omitempty"`
}
