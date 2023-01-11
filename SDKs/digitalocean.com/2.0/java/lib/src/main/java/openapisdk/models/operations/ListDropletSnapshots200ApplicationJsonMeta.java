package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ListDropletSnapshots200ApplicationJsonMeta
 * Information about the response itself.
**/
public class ListDropletSnapshots200ApplicationJsonMeta {
    @JsonProperty("total")
    public Long total;
    public ListDropletSnapshots200ApplicationJsonMeta withTotal(Long total) {
        this.total = total;
        return this;
    }
}