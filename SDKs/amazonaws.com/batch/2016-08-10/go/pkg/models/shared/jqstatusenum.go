package shared

type JqStatusEnum string

const (
	JQStatusEnumCreating JqStatusEnum = "CREATING"
	JQStatusEnumUpdating JqStatusEnum = "UPDATING"
	JQStatusEnumDeleting JqStatusEnum = "DELETING"
	JQStatusEnumDeleted  JqStatusEnum = "DELETED"
	JQStatusEnumValid    JqStatusEnum = "VALID"
	JQStatusEnumInvalid  JqStatusEnum = "INVALID"
)
