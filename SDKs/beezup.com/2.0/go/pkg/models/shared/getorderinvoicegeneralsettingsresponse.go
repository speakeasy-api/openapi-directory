package shared

// GetOrderInvoiceGeneralSettingsResponse
// Order Invoice General Settings
type GetOrderInvoiceGeneralSettingsResponse struct {
	CultureName                   string  `json:"cultureName"`
	InvoicePrefix                 string  `json:"invoicePrefix"`
	InvoiceStartingSequenceNumber int64   `json:"invoiceStartingSequenceNumber"`
	LastInvoiceSequenceNumber     *int64  `json:"lastInvoiceSequenceNumber,omitempty"`
	ProductVATPercent             float64 `json:"productVATPercent"`
	ShippingVATPercent            float64 `json:"shippingVATPercent"`
}
