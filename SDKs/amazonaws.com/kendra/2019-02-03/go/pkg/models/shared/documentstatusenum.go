package shared

type DocumentStatusEnum string

const (
	DocumentStatusEnumNotFound     DocumentStatusEnum = "NOT_FOUND"
	DocumentStatusEnumProcessing   DocumentStatusEnum = "PROCESSING"
	DocumentStatusEnumIndexed      DocumentStatusEnum = "INDEXED"
	DocumentStatusEnumUpdated      DocumentStatusEnum = "UPDATED"
	DocumentStatusEnumFailed       DocumentStatusEnum = "FAILED"
	DocumentStatusEnumUpdateFailed DocumentStatusEnum = "UPDATE_FAILED"
)
