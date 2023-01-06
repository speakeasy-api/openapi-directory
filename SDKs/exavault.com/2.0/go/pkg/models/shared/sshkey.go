package shared

type SSHKeyRelationshipsOwnerUserData struct {
	ID   *int64  `json:"id,omitempty"`
	Type *string `json:"type,omitempty"`
}

type SSHKeyRelationshipsOwnerUser struct {
	Data *SSHKeyRelationshipsOwnerUserData `json:"data,omitempty"`
}

type SSHKeyRelationships struct {
	OwnerUser *SSHKeyRelationshipsOwnerUser `json:"ownerUser,omitempty"`
}

type SSHKeyTypeEnum string

const (
	SSHKeyTypeEnumSSHKey SSHKeyTypeEnum = "sshKey"
)

// SSHKey
// Object representing an SSH Key associated with a user.
type SSHKey struct {
	Attributes    *SSHKeyAttributes    `json:"attributes,omitempty"`
	ID            *int32               `json:"id,omitempty"`
	Relationships *SSHKeyRelationships `json:"relationships,omitempty"`
	Type          *SSHKeyTypeEnum      `json:"type,omitempty"`
}
