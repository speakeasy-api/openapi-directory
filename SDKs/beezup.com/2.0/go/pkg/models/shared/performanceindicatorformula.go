package shared

// PerformanceIndicatorFormula
// The KPI formula
type PerformanceIndicatorFormula struct {
	FirstParameter  *PerformanceIndicatorFormulaParameterTypeEnum `json:"firstParameter,omitempty"`
	OperatorName    *PerformanceIndicatorFormulaOperatorNameEnum  `json:"operatorName,omitempty"`
	SecondParameter *PerformanceIndicatorFormulaParameterTypeEnum `json:"secondParameter,omitempty"`
	ThirdParameter  *int64                                        `json:"thirdParameter,omitempty"`
}
