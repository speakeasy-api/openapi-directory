package shared

type GetAnomaliesResponse struct {
	Anomalies     []Anomaly `json:"Anomalies"`
	NextPageToken *string   `json:"NextPageToken,omitempty"`
}
