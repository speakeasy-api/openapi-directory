package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ListVpcs200ApplicationJsonMeta
 * Information about the response itself.
**/
public class ListVpcs200ApplicationJsonMeta {
    @JsonProperty("total")
    public Long total;
    public ListVpcs200ApplicationJsonMeta withTotal(Long total) {
        this.total = total;
        return this;
    }
}