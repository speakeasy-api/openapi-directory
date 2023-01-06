package shared

type StoreAlert struct {
	AlertID    int32                    `json:"alertId"`
	AlertName  string                   `json:"alertName"`
	Enabled    bool                     `json:"enabled"`
	Links      StoreAlertLinks          `json:"links"`
	Properties []StoreAlertPropertyInfo `json:"properties,omitempty"`
}
