package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ListFloatingIps200ApplicationJsonFloatingIpsRegion
 * The region that the floating IP is reserved to. When you query a floating IP, the entire region object will be returned.
**/
public class ListFloatingIps200ApplicationJsonFloatingIpsRegion {
    @JsonProperty("available")
    public Boolean available;
    public ListFloatingIps200ApplicationJsonFloatingIpsRegion withAvailable(Boolean available) {
        this.available = available;
        return this;
    }
    @JsonProperty("features")
    public Object features;
    public ListFloatingIps200ApplicationJsonFloatingIpsRegion withFeatures(Object features) {
        this.features = features;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public ListFloatingIps200ApplicationJsonFloatingIpsRegion withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("sizes")
    public Object sizes;
    public ListFloatingIps200ApplicationJsonFloatingIpsRegion withSizes(Object sizes) {
        this.sizes = sizes;
        return this;
    }
    @JsonProperty("slug")
    public String slug;
    public ListFloatingIps200ApplicationJsonFloatingIpsRegion withSlug(String slug) {
        this.slug = slug;
        return this;
    }
}