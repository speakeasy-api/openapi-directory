package shared

// CoverageByTime
// Reservation coverage for a specified period, in hours.
type CoverageByTime struct {
	Groups     []ReservationCoverageGroup `json:"Groups,omitempty"`
	TimePeriod *DateInterval              `json:"TimePeriod,omitempty"`
	Total      *Coverage                  `json:"Total,omitempty"`
}
