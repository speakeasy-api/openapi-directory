package shared

type MappingStatusEnum string

const (
	MappingStatusEnumRequired        MappingStatusEnum = "required"
	MappingStatusEnumOptional        MappingStatusEnum = "optional"
	MappingStatusEnumNotConfigurable MappingStatusEnum = "notConfigurable"
)
