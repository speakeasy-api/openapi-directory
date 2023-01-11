package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ListDropletFirewalls200ApplicationJsonMeta
 * Information about the response itself.
**/
public class ListDropletFirewalls200ApplicationJsonMeta {
    @JsonProperty("total")
    public Long total;
    public ListDropletFirewalls200ApplicationJsonMeta withTotal(Long total) {
        this.total = total;
        return this;
    }
}