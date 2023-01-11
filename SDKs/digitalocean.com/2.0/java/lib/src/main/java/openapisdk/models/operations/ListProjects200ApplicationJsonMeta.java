package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ListProjects200ApplicationJsonMeta
 * Information about the response itself.
**/
public class ListProjects200ApplicationJsonMeta {
    @JsonProperty("total")
    public Long total;
    public ListProjects200ApplicationJsonMeta withTotal(Long total) {
        this.total = total;
        return this;
    }
}