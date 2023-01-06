package shared

// NotifyConfigurationType1
// The notify configuration type.
type NotifyConfigurationType1 struct {
	BlockEmail    *NotifyEmailType1 `json:"BlockEmail,omitempty"`
	From          *string           `json:"From,omitempty"`
	MfaEmail      *NotifyEmailType1 `json:"MfaEmail,omitempty"`
	NoActionEmail *NotifyEmailType1 `json:"NoActionEmail,omitempty"`
	ReplyTo       *string           `json:"ReplyTo,omitempty"`
	SourceArn     string            `json:"SourceArn"`
}
