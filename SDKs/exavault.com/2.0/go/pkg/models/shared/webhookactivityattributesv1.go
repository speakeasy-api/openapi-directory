package shared

type WebhookActivityAttributesV1WebhookV1Details struct {
	AccountName *string `json:"accountName,omitempty"`
	Attempt     *int64  `json:"attempt,omitempty"`
	AttemptID   *string `json:"attemptId,omitempty"`
	Event       *string `json:"event,omitempty"`
	Protocol    *string `json:"protocol,omitempty"`
	Username    *string `json:"username,omitempty"`
}

type WebhookActivityAttributesV1EventEnum string

const (
	WebhookActivityAttributesV1EventEnumResourcesUpload       WebhookActivityAttributesV1EventEnum = "resources.upload"
	WebhookActivityAttributesV1EventEnumResourcesDownload     WebhookActivityAttributesV1EventEnum = "resources.download"
	WebhookActivityAttributesV1EventEnumResourcesDelete       WebhookActivityAttributesV1EventEnum = "resources.delete"
	WebhookActivityAttributesV1EventEnumResourcesRename       WebhookActivityAttributesV1EventEnum = "resources.rename"
	WebhookActivityAttributesV1EventEnumResourcesCopy         WebhookActivityAttributesV1EventEnum = "resources.copy"
	WebhookActivityAttributesV1EventEnumResourcesMove         WebhookActivityAttributesV1EventEnum = "resources.move"
	WebhookActivityAttributesV1EventEnumResourcesCompress     WebhookActivityAttributesV1EventEnum = "resources.compress"
	WebhookActivityAttributesV1EventEnumResourcesExtract      WebhookActivityAttributesV1EventEnum = "resources.extract"
	WebhookActivityAttributesV1EventEnumResourcesCreateFolder WebhookActivityAttributesV1EventEnum = "resources.createFolder"
	WebhookActivityAttributesV1EventEnumSharesFormSubmit      WebhookActivityAttributesV1EventEnum = "shares.formSubmit"
)

type WebhookActivityAttributesV1 struct {
	AccountID     *string                                      `json:"accountId,omitempty"`
	AttemptID     *string                                      `json:"attemptId,omitempty"`
	Created       *string                                      `json:"created,omitempty"`
	Details       *WebhookActivityAttributesV1WebhookV1Details `json:"details,omitempty"`
	EndpointURL   *string                                      `json:"endpointUrl,omitempty"`
	Event         *WebhookActivityAttributesV1EventEnum        `json:"event,omitempty"`
	IPAddress     *string                                      `json:"ipAddress,omitempty"`
	Resend        *bool                                        `json:"resend,omitempty"`
	ResourcePath  *string                                      `json:"resourcePath,omitempty"`
	Response      *string                                      `json:"response,omitempty"`
	Status        *int64                                       `json:"status,omitempty"`
	Username      *string                                      `json:"username,omitempty"`
	WebhookFormat *string                                      `json:"webhookFormat,omitempty"`
	WebhookID     *int64                                       `json:"webhookId,omitempty"`
	WebhookPath   *string                                      `json:"webhookPath,omitempty"`
}
