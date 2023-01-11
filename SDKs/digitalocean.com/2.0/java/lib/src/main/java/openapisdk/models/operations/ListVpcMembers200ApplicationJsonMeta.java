package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ListVpcMembers200ApplicationJsonMeta
 * Information about the response itself.
**/
public class ListVpcMembers200ApplicationJsonMeta {
    @JsonProperty("total")
    public Long total;
    public ListVpcMembers200ApplicationJsonMeta withTotal(Long total) {
        this.total = total;
        return this;
    }
}