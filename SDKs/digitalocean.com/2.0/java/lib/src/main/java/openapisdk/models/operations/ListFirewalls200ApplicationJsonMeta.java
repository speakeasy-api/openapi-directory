package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ListFirewalls200ApplicationJsonMeta
 * Information about the response itself.
**/
public class ListFirewalls200ApplicationJsonMeta {
    @JsonProperty("total")
    public Long total;
    public ListFirewalls200ApplicationJsonMeta withTotal(Long total) {
        this.total = total;
        return this;
    }
}