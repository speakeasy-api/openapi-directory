package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ListAllLoadBalancers200ApplicationJsonMeta
 * Information about the response itself.
**/
public class ListAllLoadBalancers200ApplicationJsonMeta {
    @JsonProperty("total")
    public Long total;
    public ListAllLoadBalancers200ApplicationJsonMeta withTotal(Long total) {
        this.total = total;
        return this;
    }
}