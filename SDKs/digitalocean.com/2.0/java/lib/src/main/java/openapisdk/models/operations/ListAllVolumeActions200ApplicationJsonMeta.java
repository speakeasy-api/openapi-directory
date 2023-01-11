package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ListAllVolumeActions200ApplicationJsonMeta
 * Information about the response itself.
**/
public class ListAllVolumeActions200ApplicationJsonMeta {
    @JsonProperty("total")
    public Long total;
    public ListAllVolumeActions200ApplicationJsonMeta withTotal(Long total) {
        this.total = total;
        return this;
    }
}