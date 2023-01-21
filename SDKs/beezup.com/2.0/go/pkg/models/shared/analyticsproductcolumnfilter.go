package shared

type AnalyticsProductColumnFilter struct {
	OperatorName string   `json:"operatorName"`
	Values       []string `json:"values,omitempty"`
}
