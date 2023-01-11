package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ListDropletBackups200ApplicationJsonMeta
 * Information about the response itself.
**/
public class ListDropletBackups200ApplicationJsonMeta {
    @JsonProperty("total")
    public Long total;
    public ListDropletBackups200ApplicationJsonMeta withTotal(Long total) {
        this.total = total;
        return this;
    }
}