package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Onev21floatingIpsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesFloatingIpsItemsRegion
 * The region that the floating IP is reserved to. When you query a floating IP, the entire region object will be returned.
**/
public class Onev21floatingIpsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesFloatingIpsItemsRegion {
    @JsonProperty("available")
    public Boolean available;
    public Onev21floatingIpsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesFloatingIpsItemsRegion withAvailable(Boolean available) {
        this.available = available;
        return this;
    }
    @JsonProperty("features")
    public Object features;
    public Onev21floatingIpsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesFloatingIpsItemsRegion withFeatures(Object features) {
        this.features = features;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public Onev21floatingIpsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesFloatingIpsItemsRegion withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("sizes")
    public Object sizes;
    public Onev21floatingIpsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesFloatingIpsItemsRegion withSizes(Object sizes) {
        this.sizes = sizes;
        return this;
    }
    @JsonProperty("slug")
    public String slug;
    public Onev21floatingIpsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesFloatingIpsItemsRegion withSlug(String slug) {
        this.slug = slug;
        return this;
    }
}