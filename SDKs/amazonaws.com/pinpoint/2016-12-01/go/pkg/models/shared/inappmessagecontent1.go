package shared

// InAppMessageContent1
// The configuration for the message content.
type InAppMessageContent1 struct {
	BackgroundColor *string                   `json:"BackgroundColor,omitempty"`
	BodyConfig      *InAppMessageBodyConfig   `json:"BodyConfig,omitempty"`
	HeaderConfig    *InAppMessageHeaderConfig `json:"HeaderConfig,omitempty"`
	ImageURL        *string                   `json:"ImageUrl,omitempty"`
	PrimaryBtn      *InAppMessageButton1      `json:"PrimaryBtn,omitempty"`
	SecondaryBtn    *InAppMessageButton       `json:"SecondaryBtn,omitempty"`
}
