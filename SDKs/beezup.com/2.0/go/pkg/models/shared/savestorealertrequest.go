package shared

type SaveStoreAlertRequest struct {
	Enabled    *bool                `json:"enabled,omitempty"`
	Properties []StoreAlertProperty `json:"properties,omitempty"`
}
