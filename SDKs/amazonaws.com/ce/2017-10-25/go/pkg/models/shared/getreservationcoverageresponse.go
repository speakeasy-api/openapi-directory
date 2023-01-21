package shared

type GetReservationCoverageResponse struct {
	CoveragesByTime []CoverageByTime `json:"CoveragesByTime"`
	NextPageToken   *string          `json:"NextPageToken,omitempty"`
	Total           *Coverage        `json:"Total,omitempty"`
}
