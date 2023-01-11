package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ListAllDomains200ApplicationJsonMeta
 * Information about the response itself.
**/
public class ListAllDomains200ApplicationJsonMeta {
    @JsonProperty("total")
    public Long total;
    public ListAllDomains200ApplicationJsonMeta withTotal(Long total) {
        this.total = total;
        return this;
    }
}