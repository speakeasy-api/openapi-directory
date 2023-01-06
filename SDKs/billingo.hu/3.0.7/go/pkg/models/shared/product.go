package shared

type Product struct {
	Comment              *string      `json:"comment,omitempty"`
	Currency             CurrencyEnum `json:"currency"`
	GeneralLedgerNumber  *string      `json:"general_ledger_number,omitempty"`
	GeneralLedgerTaxcode *string      `json:"general_ledger_taxcode,omitempty"`
	ID                   *int64       `json:"id,omitempty"`
	Name                 string       `json:"name"`
	NetUnitPrice         *float32     `json:"net_unit_price,omitempty"`
	Unit                 string       `json:"unit"`
	Vat                  VatEnum      `json:"vat"`
}

type ProductInput struct {
	Comment              *string      `json:"comment,omitempty"`
	Currency             CurrencyEnum `json:"currency"`
	GeneralLedgerNumber  *string      `json:"general_ledger_number,omitempty"`
	GeneralLedgerTaxcode *string      `json:"general_ledger_taxcode,omitempty"`
	Name                 string       `json:"name"`
	NetUnitPrice         *float32     `json:"net_unit_price,omitempty"`
	Unit                 string       `json:"unit"`
	Vat                  VatEnum      `json:"vat"`
}
