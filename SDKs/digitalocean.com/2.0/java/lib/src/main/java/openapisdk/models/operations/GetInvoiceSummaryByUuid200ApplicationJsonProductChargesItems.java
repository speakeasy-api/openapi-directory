package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetInvoiceSummaryByUuid200ApplicationJsonProductChargesItems {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amount")
    public String amount;
    public GetInvoiceSummaryByUuid200ApplicationJsonProductChargesItems withAmount(String amount) {
        this.amount = amount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("count")
    public String count;
    public GetInvoiceSummaryByUuid200ApplicationJsonProductChargesItems withCount(String count) {
        this.count = count;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GetInvoiceSummaryByUuid200ApplicationJsonProductChargesItems withName(String name) {
        this.name = name;
        return this;
    }
}