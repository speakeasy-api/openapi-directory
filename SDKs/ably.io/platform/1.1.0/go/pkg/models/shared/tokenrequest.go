package shared

type TokenRequest struct {
	Capability map[string]interface{} `json:"capability"`
	ClientID   *string                `json:"clientId,omitempty"`
	KeyName    string                 `json:"keyName"`
	Nonce      string                 `json:"nonce"`
	Timestamp  int64                  `json:"timestamp"`
}
