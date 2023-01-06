package shared

type AccountStatusEnum string

const (
	AccountStatusEnumActive        AccountStatusEnum = "Active"
	AccountStatusEnumSystemBlocked AccountStatusEnum = "SystemBlocked"
	AccountStatusEnumUserBlocked   AccountStatusEnum = "UserBlocked"
	AccountStatusEnumNotActivated  AccountStatusEnum = "NotActivated"
)
