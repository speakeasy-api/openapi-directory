package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetInvoiceSummaryByUuid200ApplicationJsonOverages
 * A summary of the overages contributing to the invoice.
**/
public class GetInvoiceSummaryByUuid200ApplicationJsonOverages {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amount")
    public String amount;
    public GetInvoiceSummaryByUuid200ApplicationJsonOverages withAmount(String amount) {
        this.amount = amount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GetInvoiceSummaryByUuid200ApplicationJsonOverages withName(String name) {
        this.name = name;
        return this;
    }
}