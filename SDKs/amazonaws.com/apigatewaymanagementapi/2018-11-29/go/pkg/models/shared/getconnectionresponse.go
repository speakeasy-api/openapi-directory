package shared

type GetConnectionResponse struct {
	ConnectedAt  map[string]interface{} `json:"ConnectedAt,omitempty"`
	Identity     map[string]interface{} `json:"Identity,omitempty"`
	LastActiveAt map[string]interface{} `json:"LastActiveAt,omitempty"`
}
