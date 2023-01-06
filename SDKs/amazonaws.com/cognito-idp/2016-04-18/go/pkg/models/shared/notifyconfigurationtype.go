package shared

// NotifyConfigurationTypeNoActionEmail
// The notify email type.
type NotifyConfigurationTypeNoActionEmail struct {
	HTMLBody *string `json:"HtmlBody,omitempty"`
	Subject  string  `json:"Subject"`
	TextBody *string `json:"TextBody,omitempty"`
}

// NotifyConfigurationType
// The notify configuration type.
type NotifyConfigurationType struct {
	BlockEmail    *NotifyEmailType                      `json:"BlockEmail,omitempty"`
	From          *string                               `json:"From,omitempty"`
	MfaEmail      *NotifyEmailType1                     `json:"MfaEmail,omitempty"`
	NoActionEmail *NotifyConfigurationTypeNoActionEmail `json:"NoActionEmail,omitempty"`
	ReplyTo       *string                               `json:"ReplyTo,omitempty"`
	SourceArn     string                                `json:"SourceArn"`
}
