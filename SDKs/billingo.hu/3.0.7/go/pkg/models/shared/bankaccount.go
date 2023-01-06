package shared

type BankAccount struct {
	AccountNumber     string       `json:"account_number"`
	AccountNumberIban *string      `json:"account_number_iban,omitempty"`
	Currency          CurrencyEnum `json:"currency"`
	ID                *int64       `json:"id,omitempty"`
	Name              string       `json:"name"`
	NeedQr            *bool        `json:"need_qr,omitempty"`
	Swift             *string      `json:"swift,omitempty"`
}

type BankAccountInput struct {
	AccountNumber     string       `json:"account_number"`
	AccountNumberIban *string      `json:"account_number_iban,omitempty"`
	Currency          CurrencyEnum `json:"currency"`
	Name              string       `json:"name"`
	NeedQr            *bool        `json:"need_qr,omitempty"`
	Swift             *string      `json:"swift,omitempty"`
}
