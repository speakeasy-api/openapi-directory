package shared

type FaqStatusEnum string

const (
	FaqStatusEnumCreating FaqStatusEnum = "CREATING"
	FaqStatusEnumUpdating FaqStatusEnum = "UPDATING"
	FaqStatusEnumActive   FaqStatusEnum = "ACTIVE"
	FaqStatusEnumDeleting FaqStatusEnum = "DELETING"
	FaqStatusEnumFailed   FaqStatusEnum = "FAILED"
)
