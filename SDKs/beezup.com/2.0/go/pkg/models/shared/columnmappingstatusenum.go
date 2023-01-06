package shared

type ColumnMappingStatusEnum string

const (
	ColumnMappingStatusEnumWarning ColumnMappingStatusEnum = "warning"
	ColumnMappingStatusEnumSuccess ColumnMappingStatusEnum = "success"
	ColumnMappingStatusEnumFailed  ColumnMappingStatusEnum = "failed"
)
