package shared

import (
	"time"
)

type WebhookActivityAttributesV2WebhookV2DetailsWebhookV2EventDataResources struct {
	AccessedAt  *time.Time `json:"accessedAt,omitempty"`
	CreatedAt   *time.Time `json:"createdAt,omitempty"`
	CreatedBy   *string    `json:"createdBy,omitempty"`
	FileCount   *int64     `json:"fileCount,omitempty"`
	Hash        *string    `json:"hash,omitempty"`
	ID          *int64     `json:"id,omitempty"`
	Name        *string    `json:"name,omitempty"`
	Path        *string    `json:"path,omitempty"`
	Previewable *bool      `json:"previewable,omitempty"`
	Size        *int32     `json:"size,omitempty"`
	Type        *string    `json:"type,omitempty"`
	UpdatedAt   *time.Time `json:"updatedAt,omitempty"`
	UploadDate  *time.Time `json:"uploadDate,omitempty"`
}

type WebhookActivityAttributesV2WebhookV2DetailsWebhookV2EventDataShare struct {
	AccessDescription     *string          `json:"accessDescription,omitempty"`
	AccessMode            *AccessMode      `json:"accessMode,omitempty"`
	Assets                []string         `json:"assets,omitempty"`
	Created               *time.Time       `json:"created,omitempty"`
	Embed                 *bool            `json:"embed,omitempty"`
	Expiration            *string          `json:"expiration,omitempty"`
	Expired               *bool            `json:"expired,omitempty"`
	FileDropCreateFolders *bool            `json:"fileDropCreateFolders,omitempty"`
	FormID                *int64           `json:"formId,omitempty"`
	HasNotification       *bool            `json:"hasNotification,omitempty"`
	HasPassword           *bool            `json:"hasPassword,omitempty"`
	Hash                  *string          `json:"hash,omitempty"`
	ID                    *int64           `json:"id,omitempty"`
	Inherited             *bool            `json:"inherited,omitempty"`
	IsPublic              *bool            `json:"isPublic,omitempty"`
	Messages              []ShareMessage   `json:"messages,omitempty"`
	Modified              *time.Time       `json:"modified,omitempty"`
	Name                  *string          `json:"name,omitempty"`
	OwnerHash             *string          `json:"ownerHash,omitempty"`
	Paths                 []string         `json:"paths,omitempty"`
	Recipients            []ShareRecipient `json:"recipients,omitempty"`
	RequireEmail          *bool            `json:"requireEmail,omitempty"`
	Resent                *bool            `json:"resent,omitempty"`
	Status                *int64           `json:"status,omitempty"`
	TrackingStatus        *string          `json:"trackingStatus,omitempty"`
	Type                  *string          `json:"type,omitempty"`
}

type WebhookActivityAttributesV2WebhookV2DetailsWebhookV2EventData struct {
	FormDetails    []map[string]interface{}                                                 `json:"formDetails,omitempty"`
	Resources      []WebhookActivityAttributesV2WebhookV2DetailsWebhookV2EventDataResources `json:"resources,omitempty"`
	Share          []WebhookActivityAttributesV2WebhookV2DetailsWebhookV2EventDataShare     `json:"share,omitempty"`
	TransferStatus *string                                                                  `json:"transferStatus,omitempty"`
}

type WebhookActivityAttributesV2WebhookV2Details struct {
	AccountName    *string                                                        `json:"accountName,omitempty"`
	AttemptID      *string                                                        `json:"attemptId,omitempty"`
	Event          *string                                                        `json:"event,omitempty"`
	EventData      *WebhookActivityAttributesV2WebhookV2DetailsWebhookV2EventData `json:"eventData,omitempty"`
	EventTimestamp *time.Time                                                     `json:"eventTimestamp,omitempty"`
	IPAddress      *string                                                        `json:"ipAddress,omitempty"`
	Protocol       *string                                                        `json:"protocol,omitempty"`
	Username       *string                                                        `json:"username,omitempty"`
}

type WebhookActivityAttributesV2EventEnum string

const (
	WebhookActivityAttributesV2EventEnumResourcesUpload       WebhookActivityAttributesV2EventEnum = "resources.upload"
	WebhookActivityAttributesV2EventEnumResourcesDownload     WebhookActivityAttributesV2EventEnum = "resources.download"
	WebhookActivityAttributesV2EventEnumResourcesDelete       WebhookActivityAttributesV2EventEnum = "resources.delete"
	WebhookActivityAttributesV2EventEnumResourcesRename       WebhookActivityAttributesV2EventEnum = "resources.rename"
	WebhookActivityAttributesV2EventEnumResourcesCopy         WebhookActivityAttributesV2EventEnum = "resources.copy"
	WebhookActivityAttributesV2EventEnumResourcesMove         WebhookActivityAttributesV2EventEnum = "resources.move"
	WebhookActivityAttributesV2EventEnumResourcesCompress     WebhookActivityAttributesV2EventEnum = "resources.compress"
	WebhookActivityAttributesV2EventEnumResourcesExtract      WebhookActivityAttributesV2EventEnum = "resources.extract"
	WebhookActivityAttributesV2EventEnumResourcesCreateFolder WebhookActivityAttributesV2EventEnum = "resources.createFolder"
	WebhookActivityAttributesV2EventEnumSharesFormSubmit      WebhookActivityAttributesV2EventEnum = "shares.formSubmit"
)

type WebhookActivityAttributesV2 struct {
	AccountID     *string                                      `json:"accountId,omitempty"`
	AttemptID     *string                                      `json:"attemptId,omitempty"`
	Created       *string                                      `json:"created,omitempty"`
	Details       *WebhookActivityAttributesV2WebhookV2Details `json:"details,omitempty"`
	EndpointURL   *string                                      `json:"endpointUrl,omitempty"`
	Event         *WebhookActivityAttributesV2EventEnum        `json:"event,omitempty"`
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
