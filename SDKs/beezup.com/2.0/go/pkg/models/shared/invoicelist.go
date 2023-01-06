package shared

type InvoiceList struct {
	Invoices []Invoice        `json:"invoices"`
	Links    InvoiceListLinks `json:"links"`
}
