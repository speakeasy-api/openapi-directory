package shared

type WebhookRelationshipsOwnerAccountData struct {
	ID   *int64  `json:"id,omitempty"`
	Type *string `json:"type,omitempty"`
}

type WebhookRelationshipsOwnerAccount struct {
	Data *WebhookRelationshipsOwnerAccountData `json:"data,omitempty"`
}

type WebhookRelationshipsResourceData struct {
	ID   *int64  `json:"id,omitempty"`
	Type *string `json:"type,omitempty"`
}

type WebhookRelationshipsResource struct {
	Data *WebhookRelationshipsResourceData `json:"data,omitempty"`
}

type WebhookRelationships struct {
	OwnerAccount *WebhookRelationshipsOwnerAccount `json:"ownerAccount,omitempty"`
	Resource     *WebhookRelationshipsResource     `json:"resource,omitempty"`
}

type Webhook struct {
	Attributes    *WebhookAttributes    `json:"attributes,omitempty"`
	ID            *int64                `json:"id,omitempty"`
	Relationships *WebhookRelationships `json:"relationships,omitempty"`
	Type          *string               `json:"type,omitempty"`
}
