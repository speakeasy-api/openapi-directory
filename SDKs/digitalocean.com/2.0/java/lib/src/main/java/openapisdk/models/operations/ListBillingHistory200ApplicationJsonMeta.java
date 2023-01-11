package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ListBillingHistory200ApplicationJsonMeta
 * Information about the response itself.
**/
public class ListBillingHistory200ApplicationJsonMeta {
    @JsonProperty("total")
    public Long total;
    public ListBillingHistory200ApplicationJsonMeta withTotal(Long total) {
        this.total = total;
        return this;
    }
}