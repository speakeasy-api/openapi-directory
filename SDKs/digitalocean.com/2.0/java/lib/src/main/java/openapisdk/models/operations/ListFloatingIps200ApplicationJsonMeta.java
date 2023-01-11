package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ListFloatingIps200ApplicationJsonMeta
 * Information about the response itself.
**/
public class ListFloatingIps200ApplicationJsonMeta {
    @JsonProperty("total")
    public Long total;
    public ListFloatingIps200ApplicationJsonMeta withTotal(Long total) {
        this.total = total;
        return this;
    }
}