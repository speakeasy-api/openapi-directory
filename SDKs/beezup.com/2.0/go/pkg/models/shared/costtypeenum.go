package shared

type CostTypeEnum string

const (
	CostTypeEnumCpcGlobal     CostTypeEnum = "CPC_Global"
	CostTypeEnumCpaGlobal     CostTypeEnum = "CPA_Global"
	CostTypeEnumCpcByCategory CostTypeEnum = "CPC_ByCategory"
	CostTypeEnumCpaByCategory CostTypeEnum = "CPA_ByCategory"
	CostTypeEnumFixedGlobal   CostTypeEnum = "Fixed_Global"
)
