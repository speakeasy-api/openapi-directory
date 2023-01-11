package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListInvoices200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("invoice_preview")
    public openapisdk.models.shared.Onev21customers1my1invoicesGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesInvoicesItems invoicePreview;
    public ListInvoices200ApplicationJson withInvoicePreview(openapisdk.models.shared.Onev21customers1my1invoicesGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesInvoicesItems invoicePreview) {
        this.invoicePreview = invoicePreview;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("invoices")
    public ListInvoices200ApplicationJsonInvoices[] invoices;
    public ListInvoices200ApplicationJson withInvoices(ListInvoices200ApplicationJsonInvoices[] invoices) {
        this.invoices = invoices;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public ListInvoices200ApplicationJsonLinks links;
    public ListInvoices200ApplicationJson withLinks(ListInvoices200ApplicationJsonLinks links) {
        this.links = links;
        return this;
    }
    @JsonProperty("meta")
    public ListInvoices200ApplicationJsonMeta meta;
    public ListInvoices200ApplicationJson withMeta(ListInvoices200ApplicationJsonMeta meta) {
        this.meta = meta;
        return this;
    }
}