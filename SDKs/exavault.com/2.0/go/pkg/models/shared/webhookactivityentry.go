package shared

type WebhookActivityEntryTypeEnum string

const (
	WebhookActivityEntryTypeEnumWebhookActivity WebhookActivityEntryTypeEnum = "webhookActivity"
)

type WebhookActivityEntry struct {
	Attributes *interface{}                  `json:"attributes,omitempty"`
	ID         *int64                        `json:"id,omitempty"`
	Type       *WebhookActivityEntryTypeEnum `json:"type,omitempty"`
}
