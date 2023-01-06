package shared

type FormRelationshipsShareDataTypeEnum string

const (
	FormRelationshipsShareDataTypeEnumShare FormRelationshipsShareDataTypeEnum = "share"
)

type FormRelationshipsShareData struct {
	ID   *int64                              `json:"id,omitempty"`
	Type *FormRelationshipsShareDataTypeEnum `json:"type,omitempty"`
}

type FormRelationshipsShare struct {
	Data *FormRelationshipsShareData `json:"data,omitempty"`
}

// FormRelationships
// Share relationship data of the form.
type FormRelationships struct {
	Share *FormRelationshipsShare `json:"share,omitempty"`
}

// Form
// Regular form object.
type Form struct {
	Attributes    *FormAttributes    `json:"attributes,omitempty"`
	ID            *int32             `json:"id,omitempty"`
	Relationships *FormRelationships `json:"relationships,omitempty"`
	Type          *string            `json:"type,omitempty"`
}
