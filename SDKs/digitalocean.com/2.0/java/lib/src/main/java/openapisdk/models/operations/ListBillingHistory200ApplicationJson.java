package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListBillingHistory200ApplicationJson {
    @JsonProperty("billing_history")
    public ListBillingHistory200ApplicationJsonBillingHistory[] billingHistory;
    public ListBillingHistory200ApplicationJson withBillingHistory(ListBillingHistory200ApplicationJsonBillingHistory[] billingHistory) {
        this.billingHistory = billingHistory;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public ListBillingHistory200ApplicationJsonLinks links;
    public ListBillingHistory200ApplicationJson withLinks(ListBillingHistory200ApplicationJsonLinks links) {
        this.links = links;
        return this;
    }
    @JsonProperty("meta")
    public ListBillingHistory200ApplicationJsonMeta meta;
    public ListBillingHistory200ApplicationJson withMeta(ListBillingHistory200ApplicationJsonMeta meta) {
        this.meta = meta;
        return this;
    }
}