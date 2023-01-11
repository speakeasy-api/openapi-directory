package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ListFloatingIpActions200ApplicationJsonMeta
 * Information about the response itself.
**/
public class ListFloatingIpActions200ApplicationJsonMeta {
    @JsonProperty("total")
    public Long total;
    public ListFloatingIpActions200ApplicationJsonMeta withTotal(Long total) {
        this.total = total;
        return this;
    }
}