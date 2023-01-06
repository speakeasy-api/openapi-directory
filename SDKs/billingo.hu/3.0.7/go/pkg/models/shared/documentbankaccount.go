package shared

type DocumentBankAccount struct {
	AccountNumber     string  `json:"account_number"`
	AccountNumberIban *string `json:"account_number_iban,omitempty"`
	ID                *int64  `json:"id,omitempty"`
	Name              string  `json:"name"`
	Swift             *string `json:"swift,omitempty"`
}
