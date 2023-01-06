package shared

type DuplicateProductValueStrategyEnum string

const (
	DuplicateProductValueStrategyEnumNone                                 DuplicateProductValueStrategyEnum = "None"
	DuplicateProductValueStrategyEnumSkipAllDuplicateProducts             DuplicateProductValueStrategyEnum = "SkipAllDuplicateProducts"
	DuplicateProductValueStrategyEnumKeepFirstDuplicateProductOnly        DuplicateProductValueStrategyEnum = "KeepFirstDuplicateProductOnly"
	DuplicateProductValueStrategyEnumFailImportationIfAnyDuplicateProduct DuplicateProductValueStrategyEnum = "FailImportationIfAnyDuplicateProduct"
)
