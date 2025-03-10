// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// AccountTakeoverRiskConfigurationType - Configuration for mitigation actions and notification for different levels of risk detected for a potential account takeover.
type AccountTakeoverRiskConfigurationType struct {
	Actions             AccountTakeoverActionsType `json:"Actions"`
	NotifyConfiguration *NotifyConfigurationType   `json:"NotifyConfiguration,omitempty"`
}
