package shared

type CreateTokenResponse struct {
	AppID         map[string]interface{} `json:"AppId,omitempty"`
	ChallengeCode map[string]interface{} `json:"ChallengeCode,omitempty"`
	SessionID     map[string]interface{} `json:"SessionId,omitempty"`
	TTL           map[string]interface{} `json:"Ttl,omitempty"`
}
