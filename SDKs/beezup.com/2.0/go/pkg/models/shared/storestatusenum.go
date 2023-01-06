package shared

type StoreStatusEnum string

const (
	StoreStatusEnumActive        StoreStatusEnum = "Active"
	StoreStatusEnumSystemBlocked StoreStatusEnum = "SystemBlocked"
	StoreStatusEnumUserBlocked   StoreStatusEnum = "UserBlocked"
)
