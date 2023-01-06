package shared

type RoleTypeEnum string

const (
	RoleTypeEnumReadOnly  RoleTypeEnum = "READ_ONLY"
	RoleTypeEnumDeveloper RoleTypeEnum = "DEVELOPER"
	RoleTypeEnumAdmin     RoleTypeEnum = "ADMIN"
)
