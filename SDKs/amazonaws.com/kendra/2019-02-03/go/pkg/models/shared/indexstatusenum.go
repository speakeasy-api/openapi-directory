package shared

type IndexStatusEnum string

const (
	IndexStatusEnumCreating       IndexStatusEnum = "CREATING"
	IndexStatusEnumActive         IndexStatusEnum = "ACTIVE"
	IndexStatusEnumDeleting       IndexStatusEnum = "DELETING"
	IndexStatusEnumFailed         IndexStatusEnum = "FAILED"
	IndexStatusEnumUpdating       IndexStatusEnum = "UPDATING"
	IndexStatusEnumSystemUpdating IndexStatusEnum = "SYSTEM_UPDATING"
)
