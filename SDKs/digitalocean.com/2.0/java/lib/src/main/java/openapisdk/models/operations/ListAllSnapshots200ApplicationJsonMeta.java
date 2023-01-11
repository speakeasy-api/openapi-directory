package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ListAllSnapshots200ApplicationJsonMeta
 * Information about the response itself.
**/
public class ListAllSnapshots200ApplicationJsonMeta {
    @JsonProperty("total")
    public Long total;
    public ListAllSnapshots200ApplicationJsonMeta withTotal(Long total) {
        this.total = total;
        return this;
    }
}