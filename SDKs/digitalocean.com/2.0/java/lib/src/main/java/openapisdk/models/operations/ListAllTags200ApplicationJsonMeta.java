package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ListAllTags200ApplicationJsonMeta
 * Information about the response itself.
**/
public class ListAllTags200ApplicationJsonMeta {
    @JsonProperty("total")
    public Long total;
    public ListAllTags200ApplicationJsonMeta withTotal(Long total) {
        this.total = total;
        return this;
    }
}