package shared

type AnalyticsProductColumnFilter struct {
	OperatorName *string  `json:"operatorName,omitempty"`
	Values       []string `json:"values,omitempty"`
}
