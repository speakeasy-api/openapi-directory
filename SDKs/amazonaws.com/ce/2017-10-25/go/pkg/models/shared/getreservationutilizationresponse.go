package shared

type GetReservationUtilizationResponse struct {
	NextPageToken      *string                `json:"NextPageToken,omitempty"`
	Total              *ReservationAggregates `json:"Total,omitempty"`
	UtilizationsByTime []UtilizationByTime    `json:"UtilizationsByTime"`
}
