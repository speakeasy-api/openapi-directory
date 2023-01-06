package shared

// NetworkConfiguration1
// This structure specifies the network configuration for an ECS task.
type NetworkConfiguration1 struct {
	AwsvpcConfiguration *AwsVpcConfiguration1 `json:"awsvpcConfiguration,omitempty"`
}
