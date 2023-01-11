package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ListRegistryRepositories200ApplicationJsonMeta
 * Information about the response itself.
**/
public class ListRegistryRepositories200ApplicationJsonMeta {
    @JsonProperty("total")
    public Long total;
    public ListRegistryRepositories200ApplicationJsonMeta withTotal(Long total) {
        this.total = total;
        return this;
    }
}