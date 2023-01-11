package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListInvoices200ApplicationJsonInvoices
 * The invoice preview.
**/
public class ListInvoices200ApplicationJsonInvoices {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amount")
    public String amount;
    public ListInvoices200ApplicationJsonInvoices withAmount(String amount) {
        this.amount = amount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("invoice_period")
    public String invoicePeriod;
    public ListInvoices200ApplicationJsonInvoices withInvoicePeriod(String invoicePeriod) {
        this.invoicePeriod = invoicePeriod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("invoice_uuid")
    public String invoiceUuid;
    public ListInvoices200ApplicationJsonInvoices withInvoiceUuid(String invoiceUuid) {
        this.invoiceUuid = invoiceUuid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updated_at")
    public String updatedAt;
    public ListInvoices200ApplicationJsonInvoices withUpdatedAt(String updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
}