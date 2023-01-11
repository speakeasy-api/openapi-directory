package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetInvoiceSummaryByUuid200ApplicationJsonProductCharges
 * A summary of the product usage charges contributing to the invoice.  This will include an amount, and grouped aggregates by resource type  under the `items` key.
**/
public class GetInvoiceSummaryByUuid200ApplicationJsonProductCharges {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amount")
    public String amount;
    public GetInvoiceSummaryByUuid200ApplicationJsonProductCharges withAmount(String amount) {
        this.amount = amount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("items")
    public GetInvoiceSummaryByUuid200ApplicationJsonProductChargesItems[] items;
    public GetInvoiceSummaryByUuid200ApplicationJsonProductCharges withItems(GetInvoiceSummaryByUuid200ApplicationJsonProductChargesItems[] items) {
        this.items = items;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GetInvoiceSummaryByUuid200ApplicationJsonProductCharges withName(String name) {
        this.name = name;
        return this;
    }
}