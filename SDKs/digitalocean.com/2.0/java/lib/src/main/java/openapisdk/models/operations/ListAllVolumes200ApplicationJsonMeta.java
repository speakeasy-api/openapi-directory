package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ListAllVolumes200ApplicationJsonMeta
 * Information about the response itself.
**/
public class ListAllVolumes200ApplicationJsonMeta {
    @JsonProperty("total")
    public Long total;
    public ListAllVolumes200ApplicationJsonMeta withTotal(Long total) {
        this.total = total;
        return this;
    }
}