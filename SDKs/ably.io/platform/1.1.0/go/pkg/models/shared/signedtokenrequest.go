package shared

type SignedTokenRequest struct {
	Capability map[string]interface{} `json:"capability"`
	ClientID   *string                `json:"clientId,omitempty"`
	KeyName    string                 `json:"keyName"`
	Mac        string                 `json:"mac"`
	Nonce      string                 `json:"nonce"`
	Timestamp  int64                  `json:"timestamp"`
}
