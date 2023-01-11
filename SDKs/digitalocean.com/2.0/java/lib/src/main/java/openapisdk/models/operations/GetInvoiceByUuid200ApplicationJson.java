package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetInvoiceByUuid200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("invoice_items")
    public GetInvoiceByUuid200ApplicationJsonInvoiceItems[] invoiceItems;
    public GetInvoiceByUuid200ApplicationJson withInvoiceItems(GetInvoiceByUuid200ApplicationJsonInvoiceItems[] invoiceItems) {
        this.invoiceItems = invoiceItems;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public GetInvoiceByUuid200ApplicationJsonLinks links;
    public GetInvoiceByUuid200ApplicationJson withLinks(GetInvoiceByUuid200ApplicationJsonLinks links) {
        this.links = links;
        return this;
    }
    @JsonProperty("meta")
    public GetInvoiceByUuid200ApplicationJsonMeta meta;
    public GetInvoiceByUuid200ApplicationJson withMeta(GetInvoiceByUuid200ApplicationJsonMeta meta) {
        this.meta = meta;
        return this;
    }
}