package shared

// GetInfrastructureConfigurationResponse
// GetInfrastructureConfiguration response object.
type GetInfrastructureConfigurationResponse struct {
	InfrastructureConfiguration *InfrastructureConfiguration1 `json:"infrastructureConfiguration,omitempty"`
	RequestID                   *string                       `json:"requestId,omitempty"`
}
