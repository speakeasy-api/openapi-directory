// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// GetReservationCoverageResponse - Success
type GetReservationCoverageResponse struct {
	CoveragesByTime []CoverageByTime `json:"CoveragesByTime"`
	NextPageToken   *string          `json:"NextPageToken,omitempty"`
	Total           *Coverage        `json:"Total,omitempty"`
}
