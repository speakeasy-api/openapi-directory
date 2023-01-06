package shared

type OnlineSzamlaStatus struct {
	Messages      []OnlineSzamlaStatusMessage `json:"messages,omitempty"`
	Status        *string                     `json:"status,omitempty"`
	TransactionID *string                     `json:"transaction_id,omitempty"`
}
