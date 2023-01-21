package shared

type PrincipalMappingStatusEnum string

const (
	PrincipalMappingStatusEnumFailed     PrincipalMappingStatusEnum = "FAILED"
	PrincipalMappingStatusEnumSucceeded  PrincipalMappingStatusEnum = "SUCCEEDED"
	PrincipalMappingStatusEnumProcessing PrincipalMappingStatusEnum = "PROCESSING"
	PrincipalMappingStatusEnumDeleting   PrincipalMappingStatusEnum = "DELETING"
	PrincipalMappingStatusEnumDeleted    PrincipalMappingStatusEnum = "DELETED"
)
