package shared

type SaveStoreAlertRequest struct {
	Enabled    bool                 `json:"enabled"`
	Properties []StoreAlertProperty `json:"properties,omitempty"`
}
