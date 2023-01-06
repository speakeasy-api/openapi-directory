package shared

type UpdateCustomRoutingAcceleratorAttributesRequest struct {
	AcceleratorArn   string                 `json:"AcceleratorArn"`
	FlowLogsEnabled  map[string]interface{} `json:"FlowLogsEnabled,omitempty"`
	FlowLogsS3Bucket *string                `json:"FlowLogsS3Bucket,omitempty"`
	FlowLogsS3Prefix *string                `json:"FlowLogsS3Prefix,omitempty"`
}
