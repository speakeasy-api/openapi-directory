package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ListInvoices200ApplicationJsonMeta
 * Information about the response itself.
**/
public class ListInvoices200ApplicationJsonMeta {
    @JsonProperty("total")
    public Long total;
    public ListInvoices200ApplicationJsonMeta withTotal(Long total) {
        this.total = total;
        return this;
    }
}