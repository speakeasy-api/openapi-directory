package shared

type DbProxyEndpointStatusEnum string

const (
	DBProxyEndpointStatusEnumAvailable                  DbProxyEndpointStatusEnum = "available"
	DBProxyEndpointStatusEnumModifying                  DbProxyEndpointStatusEnum = "modifying"
	DBProxyEndpointStatusEnumIncompatibleNetwork        DbProxyEndpointStatusEnum = "incompatible-network"
	DBProxyEndpointStatusEnumInsufficientResourceLimits DbProxyEndpointStatusEnum = "insufficient-resource-limits"
	DBProxyEndpointStatusEnumCreating                   DbProxyEndpointStatusEnum = "creating"
	DBProxyEndpointStatusEnumDeleting                   DbProxyEndpointStatusEnum = "deleting"
)
