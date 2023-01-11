package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetImagesList200ApplicationJsonMeta
 * Information about the response itself.
**/
public class GetImagesList200ApplicationJsonMeta {
    @JsonProperty("total")
    public Long total;
    public GetImagesList200ApplicationJsonMeta withTotal(Long total) {
        this.total = total;
        return this;
    }
}