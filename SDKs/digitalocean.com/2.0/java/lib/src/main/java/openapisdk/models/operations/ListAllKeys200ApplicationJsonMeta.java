package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ListAllKeys200ApplicationJsonMeta
 * Information about the response itself.
**/
public class ListAllKeys200ApplicationJsonMeta {
    @JsonProperty("total")
    public Long total;
    public ListAllKeys200ApplicationJsonMeta withTotal(Long total) {
        this.total = total;
        return this;
    }
}