package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ListDropletKernels200ApplicationJsonMeta
 * Information about the response itself.
**/
public class ListDropletKernels200ApplicationJsonMeta {
    @JsonProperty("total")
    public Long total;
    public ListDropletKernels200ApplicationJsonMeta withTotal(Long total) {
        this.total = total;
        return this;
    }
}