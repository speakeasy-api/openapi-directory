package shared

// InAppMessageButton1
// Button Config for an in-app message.
type InAppMessageButton1 struct {
	Android       *OverrideButtonConfiguration  `json:"Android,omitempty"`
	DefaultConfig *DefaultButtonConfiguration   `json:"DefaultConfig,omitempty"`
	IOS           *OverrideButtonConfiguration1 `json:"IOS,omitempty"`
	Web           *OverrideButtonConfiguration  `json:"Web,omitempty"`
}
