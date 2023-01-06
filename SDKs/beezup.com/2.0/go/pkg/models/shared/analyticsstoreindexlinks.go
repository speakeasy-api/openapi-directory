package shared

type AnalyticsStoreIndexLinks struct {
	Optimise              map[string]interface{} `json:"optimise,omitempty"`
	OptimiseAll           map[string]interface{} `json:"optimiseAll,omitempty"`
	OptimiseByCategory    map[string]interface{} `json:"optimiseByCategory,omitempty"`
	OptimiseByChannel     map[string]interface{} `json:"optimiseByChannel,omitempty"`
	OptimiseByProduct     map[string]interface{} `json:"optimiseByProduct,omitempty"`
	ReportByCategory      map[string]interface{} `json:"reportByCategory,omitempty"`
	ReportByChannel       map[string]interface{} `json:"reportByChannel,omitempty"`
	ReportByDay           map[string]interface{} `json:"reportByDay,omitempty"`
	ReportByProduct       map[string]interface{} `json:"reportByProduct,omitempty"`
	ReportFilters         map[string]interface{} `json:"reportFilters"`
	Rules                 map[string]interface{} `json:"rules,omitempty"`
	Self                  map[string]interface{} `json:"self"`
	TrackedClicks         map[string]interface{} `json:"trackedClicks"`
	TrackedExternalOrders map[string]interface{} `json:"trackedExternalOrders,omitempty"`
	TrackedOrders         map[string]interface{} `json:"trackedOrders"`
	TrackingStatus        map[string]interface{} `json:"trackingStatus"`
}
