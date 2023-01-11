package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ListAllSizes200ApplicationJsonMeta
 * Information about the response itself.
**/
public class ListAllSizes200ApplicationJsonMeta {
    @JsonProperty("total")
    public Long total;
    public ListAllSizes200ApplicationJsonMeta withTotal(Long total) {
        this.total = total;
        return this;
    }
}