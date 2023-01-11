package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ListAllActions200ApplicationJsonActionsRegion {
    @JsonProperty("available")
    public Boolean available;
    public ListAllActions200ApplicationJsonActionsRegion withAvailable(Boolean available) {
        this.available = available;
        return this;
    }
    @JsonProperty("features")
    public Object features;
    public ListAllActions200ApplicationJsonActionsRegion withFeatures(Object features) {
        this.features = features;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public ListAllActions200ApplicationJsonActionsRegion withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("sizes")
    public Object sizes;
    public ListAllActions200ApplicationJsonActionsRegion withSizes(Object sizes) {
        this.sizes = sizes;
        return this;
    }
    @JsonProperty("slug")
    public String slug;
    public ListAllActions200ApplicationJsonActionsRegion withSlug(String slug) {
        this.slug = slug;
        return this;
    }
}