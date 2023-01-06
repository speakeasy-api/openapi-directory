package shared

// OrderInvoiceGeneralSettings
// Order Invoice General Settings
type OrderInvoiceGeneralSettings struct {
	CultureName                   string  `json:"cultureName"`
	InvoicePrefix                 string  `json:"invoicePrefix"`
	InvoiceStartingSequenceNumber int64   `json:"invoiceStartingSequenceNumber"`
	ProductVATPercent             float64 `json:"productVATPercent"`
	ShippingVATPercent            float64 `json:"shippingVATPercent"`
}
