package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ListRepositoryTags200ApplicationJsonMeta
 * Information about the response itself.
**/
public class ListRepositoryTags200ApplicationJsonMeta {
    @JsonProperty("total")
    public Long total;
    public ListRepositoryTags200ApplicationJsonMeta withTotal(Long total) {
        this.total = total;
        return this;
    }
}