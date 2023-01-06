package shared

type PartnerUpsert struct {
	AccountNumber       *string  `json:"account_number,omitempty"`
	Address             Address  `json:"address"`
	Emails              []string `json:"emails,omitempty"`
	GeneralLedgerNumber *string  `json:"general_ledger_number,omitempty"`
	Iban                *string  `json:"iban,omitempty"`
	Name                string   `json:"name"`
	Phone               *string  `json:"phone,omitempty"`
	Swift               *string  `json:"swift,omitempty"`
	Taxcode             *string  `json:"taxcode,omitempty"`
}
