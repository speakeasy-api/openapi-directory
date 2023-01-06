package shared

type Insurance struct {
	PayerID   *string `json:"payer_id,omitempty"`
	PayerName *string `json:"payer_name,omitempty"`
	State     *string `json:"state,omitempty"`
}
