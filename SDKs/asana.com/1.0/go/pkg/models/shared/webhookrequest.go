package shared

// WebhookRequestFilters
// A set of filters to specify a whitelist for what types of events will be delivered.
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
