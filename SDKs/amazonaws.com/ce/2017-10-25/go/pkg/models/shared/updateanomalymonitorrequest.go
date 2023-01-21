package shared

type UpdateAnomalyMonitorRequest struct {
	MonitorArn  string  `json:"MonitorArn"`
	MonitorName *string `json:"MonitorName,omitempty"`
}
