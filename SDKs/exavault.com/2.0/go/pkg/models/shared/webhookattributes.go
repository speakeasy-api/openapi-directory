package shared

import (
	"time"
)

type WebhookAttributesResponseVersionEnum string

const (
	WebhookAttributesResponseVersionEnumV1 WebhookAttributesResponseVersionEnum = "v1"
	WebhookAttributesResponseVersionEnumV2 WebhookAttributesResponseVersionEnum = "v2"
)

type WebhookAttributes struct {
	Created           *time.Time                            `json:"created,omitempty"`
	EndpointURL       *string                               `json:"endpointUrl,omitempty"`
	Failed            *bool                                 `json:"failed,omitempty"`
	Modified          *time.Time                            `json:"modified,omitempty"`
	ResponseVersion   *WebhookAttributesResponseVersionEnum `json:"responseVersion,omitempty"`
	Triggers          *WebhookTriggers                      `json:"triggers,omitempty"`
	VerificationToken *string                               `json:"verificationToken,omitempty"`
}
