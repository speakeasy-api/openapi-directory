package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerRegion
 * The region where the load balancer instance is located. When setting a region, the value should be the slug identifier for the region. When you query a load balancer, an entire region object will be returned.
**/
public class Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerRegion {
    @JsonProperty("available")
    public Boolean available;
    public Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerRegion withAvailable(Boolean available) {
        this.available = available;
        return this;
    }
    @JsonProperty("features")
    public Object features;
    public Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerRegion withFeatures(Object features) {
        this.features = features;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerRegion withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("sizes")
    public Object sizes;
    public Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerRegion withSizes(Object sizes) {
        this.sizes = sizes;
        return this;
    }
    @JsonProperty("slug")
    public String slug;
    public Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerRegion withSlug(String slug) {
        this.slug = slug;
        return this;
    }
}