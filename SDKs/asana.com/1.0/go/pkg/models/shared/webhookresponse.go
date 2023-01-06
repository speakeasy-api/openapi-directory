package shared

import (
	"time"
)

// WebhookResponse
// Webhook objects represent the state of an active subscription for a server to be updated with information from Asana. This schema represents the subscription itself, not the objects that are sent to the server. For information on those please refer to the [Event](/docs/tocS_Event) schema.
type WebhookResponse struct {
	CreatedAt          *time.Time               `json:"created_at,omitempty"`
	Filters            []map[string]interface{} `json:"filters,omitempty"`
	LastFailureAt      *time.Time               `json:"last_failure_at,omitempty"`
	LastFailureContent *string                  `json:"last_failure_content,omitempty"`
	LastSuccessAt      *time.Time               `json:"last_success_at,omitempty"`
}
