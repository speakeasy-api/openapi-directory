package shared

type ShareShareRelationshipsShareRelationshipsMessageShareMessageDataTypeEnum string

const (
	ShareShareRelationshipsShareRelationshipsMessageShareMessageDataTypeEnumMessage ShareShareRelationshipsShareRelationshipsMessageShareMessageDataTypeEnum = "message"
)

type ShareShareRelationshipsShareRelationshipsMessageShareMessageData struct {
	ID   *int64                                                                    `json:"id,omitempty"`
	Type *ShareShareRelationshipsShareRelationshipsMessageShareMessageDataTypeEnum `json:"type,omitempty"`
}

type ShareShareRelationshipsShareRelationshipsMessage struct {
	Data *ShareShareRelationshipsShareRelationshipsMessageShareMessageData `json:"data,omitempty"`
}

type ShareShareRelationshipsShareRelationshipsNotificationDataTypeEnum string

const (
	ShareShareRelationshipsShareRelationshipsNotificationDataTypeEnumNotification ShareShareRelationshipsShareRelationshipsNotificationDataTypeEnum = "notification"
)

type ShareShareRelationshipsShareRelationshipsNotificationData struct {
	ID   *int64                                                             `json:"id,omitempty"`
	Type *ShareShareRelationshipsShareRelationshipsNotificationDataTypeEnum `json:"type,omitempty"`
}

type ShareShareRelationshipsShareRelationshipsNotification struct {
	Data *ShareShareRelationshipsShareRelationshipsNotificationData `json:"data,omitempty"`
}

type ShareShareRelationshipsShareRelationshipsOwnerData struct {
	ID   *int64  `json:"id,omitempty"`
	Type *string `json:"type,omitempty"`
}

type ShareShareRelationshipsShareRelationshipsOwner struct {
	Data *ShareShareRelationshipsShareRelationshipsOwnerData `json:"data,omitempty"`
}

type ShareShareRelationshipsShareRelationshipsResourceShareResourceDataTypeEnum string

const (
	ShareShareRelationshipsShareRelationshipsResourceShareResourceDataTypeEnumResource ShareShareRelationshipsShareRelationshipsResourceShareResourceDataTypeEnum = "resource"
)

type ShareShareRelationshipsShareRelationshipsResourceShareResourceData struct {
	ID   *int64                                                                      `json:"id,omitempty"`
	Type *ShareShareRelationshipsShareRelationshipsResourceShareResourceDataTypeEnum `json:"type,omitempty"`
}

type ShareShareRelationshipsShareRelationshipsResource struct {
	Data *ShareShareRelationshipsShareRelationshipsResourceShareResourceData `json:"data,omitempty"`
}

// ShareShareRelationships
// Message, owner, resource, and notification relationships of the share.
type ShareShareRelationships struct {
	Messages      []ShareShareRelationshipsShareRelationshipsMessage      `json:"messages,omitempty"`
	Notifications []ShareShareRelationshipsShareRelationshipsNotification `json:"notifications,omitempty"`
	Owner         *ShareShareRelationshipsShareRelationshipsOwner         `json:"owner,omitempty"`
	Resources     []ShareShareRelationshipsShareRelationshipsResource     `json:"resources,omitempty"`
}

type ShareTypeEnum string

const (
	ShareTypeEnumShare ShareTypeEnum = "share"
)

// Share
// Object contains share properties.
type Share struct {
	Attributes    *ShareAttributes         `json:"attributes,omitempty"`
	ID            *int32                   `json:"id,omitempty"`
	Relationships *ShareShareRelationships `json:"relationships,omitempty"`
	Type          *ShareTypeEnum           `json:"type,omitempty"`
}
