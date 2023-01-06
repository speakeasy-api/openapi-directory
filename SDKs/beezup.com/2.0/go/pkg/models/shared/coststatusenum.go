package shared

type CostStatusEnum string

const (
	CostStatusEnumRequired        CostStatusEnum = "required"
	CostStatusEnumOptional        CostStatusEnum = "optional"
	CostStatusEnumNotConfigurable CostStatusEnum = "notConfigurable"
)
