package shared

type GetAnomalyMonitorsResponse struct {
	AnomalyMonitors []AnomalyMonitor `json:"AnomalyMonitors"`
	NextPageToken   *string          `json:"NextPageToken,omitempty"`
}
