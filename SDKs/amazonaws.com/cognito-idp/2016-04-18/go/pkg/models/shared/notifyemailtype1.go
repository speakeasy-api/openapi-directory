package shared

// NotifyEmailType1
// The notify email type.
type NotifyEmailType1 struct {
	HTMLBody *string `json:"HtmlBody,omitempty"`
	Subject  string  `json:"Subject"`
	TextBody *string `json:"TextBody,omitempty"`
}
