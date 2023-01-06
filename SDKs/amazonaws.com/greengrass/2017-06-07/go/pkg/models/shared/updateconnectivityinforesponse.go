package shared

type UpdateConnectivityInfoResponse struct {
	Message map[string]interface{} `json:"Message,omitempty"`
	Version *string                `json:"Version,omitempty"`
}
