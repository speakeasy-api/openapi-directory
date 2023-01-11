package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListKubernetesAssociatedResources200ApplicationJsonLoadBalancers {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public ListKubernetesAssociatedResources200ApplicationJsonLoadBalancers withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ListKubernetesAssociatedResources200ApplicationJsonLoadBalancers withName(String name) {
        this.name = name;
        return this;
    }
}