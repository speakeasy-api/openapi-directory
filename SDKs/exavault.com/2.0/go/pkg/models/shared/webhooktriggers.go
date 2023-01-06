package shared

type WebhookTriggersResources struct {
	Compress     *bool `json:"compress,omitempty"`
	Copy         *bool `json:"copy,omitempty"`
	CreateFolder *bool `json:"createFolder,omitempty"`
	Delete       *bool `json:"delete,omitempty"`
	Download     *bool `json:"download,omitempty"`
	Extract      *bool `json:"extract,omitempty"`
	Move         *bool `json:"move,omitempty"`
	Rename       *bool `json:"rename,omitempty"`
	Upload       *bool `json:"upload,omitempty"`
}

type WebhookTriggersShares struct {
	FormSubmit *bool `json:"formSubmit,omitempty"`
}

type WebhookTriggers struct {
	Resources *WebhookTriggersResources `json:"resources,omitempty"`
	Shares    *WebhookTriggersShares    `json:"shares,omitempty"`
}
