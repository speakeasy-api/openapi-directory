package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetInvoiceSummaryByUuid200ApplicationJsonTaxes
 * A summary of the taxes contributing to the invoice.
**/
public class GetInvoiceSummaryByUuid200ApplicationJsonTaxes {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amount")
    public String amount;
    public GetInvoiceSummaryByUuid200ApplicationJsonTaxes withAmount(String amount) {
        this.amount = amount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GetInvoiceSummaryByUuid200ApplicationJsonTaxes withName(String name) {
        this.name = name;
        return this;
    }
}