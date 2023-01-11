package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ListVolumeSnapshots200ApplicationJsonMeta
 * Information about the response itself.
**/
public class ListVolumeSnapshots200ApplicationJsonMeta {
    @JsonProperty("total")
    public Long total;
    public ListVolumeSnapshots200ApplicationJsonMeta withTotal(Long total) {
        this.total = total;
        return this;
    }
}