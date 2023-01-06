package shared

// AccountTakeoverRiskConfigurationType1
// Configuration for mitigation actions and notification for different levels of risk detected for a potential account takeover.
type AccountTakeoverRiskConfigurationType1 struct {
	Actions             AccountTakeoverActionsType `json:"Actions"`
	NotifyConfiguration *NotifyConfigurationType1  `json:"NotifyConfiguration,omitempty"`
}
