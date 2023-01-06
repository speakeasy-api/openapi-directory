package shared

type CeStatusEnum string

const (
	CEStatusEnumCreating CeStatusEnum = "CREATING"
	CEStatusEnumUpdating CeStatusEnum = "UPDATING"
	CEStatusEnumDeleting CeStatusEnum = "DELETING"
	CEStatusEnumDeleted  CeStatusEnum = "DELETED"
	CEStatusEnumValid    CeStatusEnum = "VALID"
	CEStatusEnumInvalid  CeStatusEnum = "INVALID"
)
