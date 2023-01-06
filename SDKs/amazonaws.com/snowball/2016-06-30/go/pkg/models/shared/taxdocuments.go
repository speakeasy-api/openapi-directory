package shared

// TaxDocuments
// The tax documents required in your AWS Region.
type TaxDocuments struct {
	IND *IndTaxDocuments `json:"IND,omitempty"`
}
