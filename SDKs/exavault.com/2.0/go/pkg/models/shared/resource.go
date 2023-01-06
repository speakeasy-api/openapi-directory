package shared

type ResourceRelationshipsDirectFileData struct {
	ID   *int32  `json:"id,omitempty"`
	Type *string `json:"type,omitempty"`
}

type ResourceRelationshipsDirectFile struct {
	Data *ResourceRelationshipsDirectFileData `json:"data,omitempty"`
}

type ResourceRelationshipsNotificationsData struct {
	ID   *int32  `json:"id,omitempty"`
	Type *string `json:"type,omitempty"`
}

type ResourceRelationshipsNotifications struct {
	Data *ResourceRelationshipsNotificationsData `json:"data,omitempty"`
}

type ResourceRelationshipsParentResourceData struct {
	ID   *int64  `json:"id,omitempty"`
	Type *string `json:"type,omitempty"`
}

type ResourceRelationshipsParentResource struct {
	Data *ResourceRelationshipsParentResourceData `json:"data,omitempty"`
}

type ResourceRelationshipsShareData struct {
	ID   *int32  `json:"id,omitempty"`
	Type *string `json:"type,omitempty"`
}

type ResourceRelationshipsShare struct {
	Data *ResourceRelationshipsShareData `json:"data,omitempty"`
}

type ResourceRelationships struct {
	DirectFile     *ResourceRelationshipsDirectFile     `json:"directFile,omitempty"`
	Notifications  []ResourceRelationshipsNotifications `json:"notifications,omitempty"`
	ParentResource *ResourceRelationshipsParentResource `json:"parentResource,omitempty"`
	Share          *ResourceRelationshipsShare          `json:"share,omitempty"`
}

type ResourceTypeEnum string

const (
	ResourceTypeEnumResource ResourceTypeEnum = "resource"
)

// Resource
// All properties of the resource.
type Resource struct {
	Attributes    *ResourceAttributes    `json:"attributes,omitempty"`
	ID            *int64                 `json:"id,omitempty"`
	Relationships *ResourceRelationships `json:"relationships,omitempty"`
	Type          *ResourceTypeEnum      `json:"type,omitempty"`
}
