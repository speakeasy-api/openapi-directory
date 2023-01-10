package shared

type GetConnectionResponseIdentity struct {
	SourceIP  map[string]interface{} `json:"SourceIp"`
	UserAgent map[string]interface{} `json:"UserAgent"`
}

type GetConnectionResponse struct {
	ConnectedAt  map[string]interface{}         `json:"ConnectedAt,omitempty"`
	Identity     *GetConnectionResponseIdentity `json:"Identity,omitempty"`
	LastActiveAt map[string]interface{}         `json:"LastActiveAt,omitempty"`
}
