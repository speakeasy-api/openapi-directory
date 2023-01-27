package shared

import (
	"time"
)

type WebhookDisabledReasonEnum string

const (
	WebhookDisabledReasonEnumRetryLimit WebhookDisabledReasonEnum = "retry_limit"
	WebhookDisabledReasonEnumUsageLimit WebhookDisabledReasonEnum = "usage_limit"
)

type Webhook struct {
	CreatedAt      *time.Time                 `json:"created_at,omitempty"`
	DeliveryURL    string                     `json:"delivery_url"`
	Description    *string                    `json:"description,omitempty"`
	DisabledReason *WebhookDisabledReasonEnum `json:"disabled_reason,omitempty"`
	Events         []WebhookEventTypeEnum     `json:"events"`
	ExecuteBaseURL string                     `json:"execute_base_url"`
	ID             *string                    `json:"id,omitempty"`
	Status         StatusEnum                 `json:"status"`
	UnifiedAPI     UnifiedAPIIDEnum           `json:"unified_api"`
	UpdatedAt      *time.Time                 `json:"updated_at,omitempty"`
}
