package shared

// AnomalyMonitor
// This object continuously inspects your account's cost data for anomalies. It's based on <code>MonitorType</code> and <code>MonitorSpecification</code>. The content consists of detailed metadata and the current status of the monitor object.
type AnomalyMonitor struct {
	CreationDate          *string               `json:"CreationDate,omitempty"`
	DimensionalValueCount *int64                `json:"DimensionalValueCount,omitempty"`
	LastEvaluatedDate     *string               `json:"LastEvaluatedDate,omitempty"`
	LastUpdatedDate       *string               `json:"LastUpdatedDate,omitempty"`
	MonitorArn            *string               `json:"MonitorArn,omitempty"`
	MonitorDimension      *MonitorDimensionEnum `json:"MonitorDimension,omitempty"`
	MonitorName           string                `json:"MonitorName"`
	MonitorSpecification  *Expression           `json:"MonitorSpecification,omitempty"`
	MonitorType           MonitorTypeEnum       `json:"MonitorType"`
}
