package shared

type DisassociateMacSecKeyRequest struct {
	ConnectionID string `json:"connectionId"`
	SecretARN    string `json:"secretARN"`
}
