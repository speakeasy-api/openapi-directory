package shared

type DbProxyStatusEnum string

const (
	DBProxyStatusEnumAvailable                  DbProxyStatusEnum = "available"
	DBProxyStatusEnumModifying                  DbProxyStatusEnum = "modifying"
	DBProxyStatusEnumIncompatibleNetwork        DbProxyStatusEnum = "incompatible-network"
	DBProxyStatusEnumInsufficientResourceLimits DbProxyStatusEnum = "insufficient-resource-limits"
	DBProxyStatusEnumCreating                   DbProxyStatusEnum = "creating"
	DBProxyStatusEnumDeleting                   DbProxyStatusEnum = "deleting"
	DBProxyStatusEnumSuspended                  DbProxyStatusEnum = "suspended"
	DBProxyStatusEnumSuspending                 DbProxyStatusEnum = "suspending"
	DBProxyStatusEnumReactivating               DbProxyStatusEnum = "reactivating"
)
