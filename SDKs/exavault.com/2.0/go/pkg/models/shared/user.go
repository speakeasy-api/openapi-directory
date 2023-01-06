package shared

type UserRelationshipsHomeResourceDataTypeEnum string

const (
	UserRelationshipsHomeResourceDataTypeEnumResource UserRelationshipsHomeResourceDataTypeEnum = "resource"
)

type UserRelationshipsHomeResourceData struct {
	ID   *int64                                     `json:"id,omitempty"`
	Type *UserRelationshipsHomeResourceDataTypeEnum `json:"type,omitempty"`
}

type UserRelationshipsHomeResource struct {
	Data *UserRelationshipsHomeResourceData `json:"data,omitempty"`
}

type UserRelationshipsOwnerAccountDataTypeEnum string

const (
	UserRelationshipsOwnerAccountDataTypeEnumAccount UserRelationshipsOwnerAccountDataTypeEnum = "account"
)

type UserRelationshipsOwnerAccountData struct {
	ID   *int32                                     `json:"id,omitempty"`
	Type *UserRelationshipsOwnerAccountDataTypeEnum `json:"type,omitempty"`
}

type UserRelationshipsOwnerAccount struct {
	Data *UserRelationshipsOwnerAccountData `json:"data,omitempty"`
}

// UserRelationships
// Home resource and owner account relationship data for the user.
type UserRelationships struct {
	HomeResource *UserRelationshipsHomeResource `json:"homeResource,omitempty"`
	OwnerAccount UserRelationshipsOwnerAccount  `json:"ownerAccount"`
}

// User
// Object contains user properties.
type User struct {
	Attributes    *UserAttributes    `json:"attributes,omitempty"`
	ID            *int32             `json:"id,omitempty"`
	Relationships *UserRelationships `json:"relationships,omitempty"`
	Type          *string            `json:"type,omitempty"`
}
