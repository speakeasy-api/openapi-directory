package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ListAllActions200ApplicationJsonMeta
 * Information about the response itself.
**/
public class ListAllActions200ApplicationJsonMeta {
    @JsonProperty("total")
    public Long total;
    public ListAllActions200ApplicationJsonMeta withTotal(Long total) {
        this.total = total;
        return this;
    }
}