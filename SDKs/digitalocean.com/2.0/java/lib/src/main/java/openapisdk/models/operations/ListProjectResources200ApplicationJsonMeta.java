package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ListProjectResources200ApplicationJsonMeta
 * Information about the response itself.
**/
public class ListProjectResources200ApplicationJsonMeta {
    @JsonProperty("total")
    public Long total;
    public ListProjectResources200ApplicationJsonMeta withTotal(Long total) {
        this.total = total;
        return this;
    }
}