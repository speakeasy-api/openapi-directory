package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class InvoiceList {
    @JsonProperty("invoices")
    public Invoice[] invoices;
    public InvoiceList withInvoices(Invoice[] invoices) {
        this.invoices = invoices;
        return this;
    }
    @JsonProperty("links")
    public InvoiceListLinks links;
    public InvoiceList withLinks(InvoiceListLinks links) {
        this.links = links;
        return this;
    }
}