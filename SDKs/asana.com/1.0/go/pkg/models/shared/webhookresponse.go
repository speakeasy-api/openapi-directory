package shared

import (
	"time"
)

// WebhookResponseFilters
// A set of filters to specify a whitelist for what types of events will be delivered.
type WebhookResponseFilters struct {
	Action          *string  `json:"action,omitempty"`
	Fields          []string `json:"fields,omitempty"`
	ResourceSubtype *string  `json:"resource_subtype,omitempty"`
	ResourceType    *string  `json:"resource_type,omitempty"`
}

// WebhookResponse
// Webhook objects represent the state of an active subscription for a server to be updated with information from Asana. This schema represents the subscription itself, not the objects that are sent to the server. For information on those please refer to the [Event](/docs/tocS_Event) schema.
type WebhookResponse struct {
	Active             *bool                    `json:"active,omitempty"`
	CreatedAt          *time.Time               `json:"created_at,omitempty"`
	Filters            []WebhookResponseFilters `json:"filters,omitempty"`
	Gid                *string                  `json:"gid,omitempty"`
	LastFailureAt      *time.Time               `json:"last_failure_at,omitempty"`
	LastFailureContent *string                  `json:"last_failure_content,omitempty"`
	LastSuccessAt      *time.Time               `json:"last_success_at,omitempty"`
	Resource           *AsanaNamedResource      `json:"resource,omitempty"`
	ResourceType       *string                  `json:"resource_type,omitempty"`
	Target             *string                  `json:"target,omitempty"`
}
