package shared

type CategoryMappingStatusEnum string

const (
	CategoryMappingStatusEnumWarning CategoryMappingStatusEnum = "warning"
	CategoryMappingStatusEnumSuccess CategoryMappingStatusEnum = "success"
	CategoryMappingStatusEnumFailed  CategoryMappingStatusEnum = "failed"
)
