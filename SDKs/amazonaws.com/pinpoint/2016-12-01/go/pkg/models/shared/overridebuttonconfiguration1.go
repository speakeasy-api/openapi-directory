package shared

// OverrideButtonConfiguration1
// Override button configuration.
type OverrideButtonConfiguration1 struct {
	ButtonAction map[string]interface{} `json:"ButtonAction"`
	Link         *string                `json:"Link,omitempty"`
}
