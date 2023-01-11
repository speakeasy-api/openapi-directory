package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListAllLoadBalancers200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public ListAllLoadBalancers200ApplicationJsonLinks links;
    public ListAllLoadBalancers200ApplicationJson withLinks(ListAllLoadBalancers200ApplicationJsonLinks links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("load_balancers")
    public openapisdk.models.shared.Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancer[] loadBalancers;
    public ListAllLoadBalancers200ApplicationJson withLoadBalancers(openapisdk.models.shared.Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancer[] loadBalancers) {
        this.loadBalancers = loadBalancers;
        return this;
    }
    @JsonProperty("meta")
    public ListAllLoadBalancers200ApplicationJsonMeta meta;
    public ListAllLoadBalancers200ApplicationJson withMeta(ListAllLoadBalancers200ApplicationJsonMeta meta) {
        this.meta = meta;
        return this;
    }
}