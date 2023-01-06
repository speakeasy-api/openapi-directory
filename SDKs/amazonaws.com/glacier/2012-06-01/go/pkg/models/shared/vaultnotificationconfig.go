package shared

// VaultNotificationConfig
// Represents a vault's notification configuration.
type VaultNotificationConfig struct {
	Events   []string `json:"Events,omitempty"`
	SNSTopic *string  `json:"SNSTopic,omitempty"`
}
