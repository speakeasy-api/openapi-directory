package shared

type NotificationRelationshipsOwnerUserDataTypeEnum string

const (
	NotificationRelationshipsOwnerUserDataTypeEnumUser NotificationRelationshipsOwnerUserDataTypeEnum = "user"
)

type NotificationRelationshipsOwnerUserData struct {
	ID   *int64                                          `json:"id,omitempty"`
	Type *NotificationRelationshipsOwnerUserDataTypeEnum `json:"type,omitempty"`
}

type NotificationRelationshipsOwnerUser struct {
	Data *NotificationRelationshipsOwnerUserData `json:"data,omitempty"`
}

type NotificationRelationshipsResourceData struct {
	ID   *int64  `json:"id,omitempty"`
	Type *string `json:"type,omitempty"`
}

type NotificationRelationshipsResource struct {
	Data *NotificationRelationshipsResourceData `json:"data,omitempty"`
}

type NotificationRelationshipsShareData struct {
	ID   *int32  `json:"id,omitempty"`
	Type *string `json:"type,omitempty"`
}

type NotificationRelationshipsShare struct {
	Data *NotificationRelationshipsShareData `json:"data,omitempty"`
}

type NotificationRelationships struct {
	OwnerUser *NotificationRelationshipsOwnerUser `json:"ownerUser,omitempty"`
	Resource  *NotificationRelationshipsResource  `json:"resource,omitempty"`
	Share     *NotificationRelationshipsShare     `json:"share,omitempty"`
}

// Notification
// Object containing notification properties.
type Notification struct {
	Attributes    *NotificationAttributes    `json:"attributes,omitempty"`
	ID            *int32                     `json:"id,omitempty"`
	Relationships *NotificationRelationships `json:"relationships,omitempty"`
	Type          *string                    `json:"type,omitempty"`
}
