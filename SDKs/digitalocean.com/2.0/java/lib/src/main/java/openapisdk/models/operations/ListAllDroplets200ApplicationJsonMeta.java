package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ListAllDroplets200ApplicationJsonMeta
 * Information about the response itself.
**/
public class ListAllDroplets200ApplicationJsonMeta {
    @JsonProperty("total")
    public Long total;
    public ListAllDroplets200ApplicationJsonMeta withTotal(Long total) {
        this.total = total;
        return this;
    }
}