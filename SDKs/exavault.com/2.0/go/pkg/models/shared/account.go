package shared

type AccountMasterUserMasterUserDataTypeEnum string

const (
	AccountMasterUserMasterUserDataTypeEnumUser AccountMasterUserMasterUserDataTypeEnum = "user"
)

type AccountMasterUserMasterUserData struct {
	ID   *int64                                   `json:"id,omitempty"`
	Type *AccountMasterUserMasterUserDataTypeEnum `json:"type,omitempty"`
}

type AccountMasterUserMasterUser struct {
	Data *AccountMasterUserMasterUserData `json:"data,omitempty"`
}

type AccountMasterUser struct {
	MasterUser *AccountMasterUserMasterUser `json:"masterUser,omitempty"`
}

type AccountTypeEnum string

const (
	AccountTypeEnumAccount AccountTypeEnum = "account"
)

// Account
// Object contains all account properties.
type Account struct {
	Attributes    *AccountAttributes `json:"attributes,omitempty"`
	ID            *int32             `json:"id,omitempty"`
	Relationships *AccountMasterUser `json:"relationships,omitempty"`
	Type          *AccountTypeEnum   `json:"type,omitempty"`
}
