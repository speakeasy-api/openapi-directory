package shared

type AssociateMacSecKeyRequest struct {
	Cak          *string `json:"cak,omitempty"`
	Ckn          *string `json:"ckn,omitempty"`
	ConnectionID string  `json:"connectionId"`
	SecretARN    *string `json:"secretARN,omitempty"`
}
