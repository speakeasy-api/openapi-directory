package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListAllLoadBalancers200ApplicationJsonLinksPages1 {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("last")
    public String last;
    public ListAllLoadBalancers200ApplicationJsonLinksPages1 withLast(String last) {
        this.last = last;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("next")
    public String next;
    public ListAllLoadBalancers200ApplicationJsonLinksPages1 withNext(String next) {
        this.next = next;
        return this;
    }
}