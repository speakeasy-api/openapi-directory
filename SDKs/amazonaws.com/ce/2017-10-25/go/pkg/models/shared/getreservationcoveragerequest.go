package shared

// GetReservationCoverageRequest
// You can use the following request parameters to query for how much of your instance usage a reservation covered.
type GetReservationCoverageRequest struct {
	Filter        *Expression       `json:"Filter,omitempty"`
	Granularity   *GranularityEnum  `json:"Granularity,omitempty"`
	GroupBy       []GroupDefinition `json:"GroupBy,omitempty"`
	MaxResults    *int64            `json:"MaxResults,omitempty"`
	Metrics       []string          `json:"Metrics,omitempty"`
	NextPageToken *string           `json:"NextPageToken,omitempty"`
	SortBy        *SortDefinition   `json:"SortBy,omitempty"`
	TimePeriod    DateInterval      `json:"TimePeriod"`
}
