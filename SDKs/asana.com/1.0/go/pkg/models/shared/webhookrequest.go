package shared

// WebhookRequestFilters
// A WebhookFilter can be passed on creation of a webhook in order to filter the types of actions that trigger delivery of an [Event](/docs/tocS_Event)
type WebhookRequestFilters struct {
	Action          *string  `json:"action,omitempty"`
	Fields          []string `json:"fields,omitempty"`
	ResourceSubtype *string  `json:"resource_subtype,omitempty"`
	ResourceType    *string  `json:"resource_type,omitempty"`
}

type WebhookRequest struct {
	Filters  []WebhookRequestFilters `json:"filters,omitempty"`
	Resource string                  `json:"resource"`
	Target   string                  `json:"target"`
}
