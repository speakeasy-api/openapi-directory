package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ListAllDomainRecords200ApplicationJsonMeta
 * Information about the response itself.
**/
public class ListAllDomainRecords200ApplicationJsonMeta {
    @JsonProperty("total")
    public Long total;
    public ListAllDomainRecords200ApplicationJsonMeta withTotal(Long total) {
        this.total = total;
        return this;
    }
}