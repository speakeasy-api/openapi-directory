package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetInvoiceSummaryByUuid200ApplicationJsonCreditsAndAdjustments
 * A summary of the credits and adjustments contributing to the invoice.
**/
public class GetInvoiceSummaryByUuid200ApplicationJsonCreditsAndAdjustments {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amount")
    public String amount;
    public GetInvoiceSummaryByUuid200ApplicationJsonCreditsAndAdjustments withAmount(String amount) {
        this.amount = amount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GetInvoiceSummaryByUuid200ApplicationJsonCreditsAndAdjustments withName(String name) {
        this.name = name;
        return this;
    }
}