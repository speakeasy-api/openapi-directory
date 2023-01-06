package shared

// ConversationLogSettings1
// Configures conversation logging that saves audio, text, and metadata for the conversations with your users.
type ConversationLogSettings1 struct {
	AudioLogSettings map[string]interface{} `json:"audioLogSettings,omitempty"`
	TextLogSettings  []TextLogSetting       `json:"textLogSettings,omitempty"`
}
