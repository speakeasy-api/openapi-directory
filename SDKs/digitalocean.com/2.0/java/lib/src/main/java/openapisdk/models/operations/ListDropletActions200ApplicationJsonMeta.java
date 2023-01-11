package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ListDropletActions200ApplicationJsonMeta
 * Information about the response itself.
**/
public class ListDropletActions200ApplicationJsonMeta {
    @JsonProperty("total")
    public Long total;
    public ListDropletActions200ApplicationJsonMeta withTotal(Long total) {
        this.total = total;
        return this;
    }
}