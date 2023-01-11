package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ListCdnEndpoints200ApplicationJsonMeta
 * Information about the response itself.
**/
public class ListCdnEndpoints200ApplicationJsonMeta {
    @JsonProperty("total")
    public Long total;
    public ListCdnEndpoints200ApplicationJsonMeta withTotal(Long total) {
        this.total = total;
        return this;
    }
}