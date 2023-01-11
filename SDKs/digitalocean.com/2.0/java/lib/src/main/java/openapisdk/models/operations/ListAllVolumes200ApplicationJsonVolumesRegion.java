package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ListAllVolumes200ApplicationJsonVolumesRegion
 * The region that the block storage volume is located in. When setting a region, the value should be the slug identifier for the region. When you query a block storage volume, the entire region object will be returned.
**/
public class ListAllVolumes200ApplicationJsonVolumesRegion {
    @JsonProperty("available")
    public Boolean available;
    public ListAllVolumes200ApplicationJsonVolumesRegion withAvailable(Boolean available) {
        this.available = available;
        return this;
    }
    @JsonProperty("features")
    public Object features;
    public ListAllVolumes200ApplicationJsonVolumesRegion withFeatures(Object features) {
        this.features = features;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public ListAllVolumes200ApplicationJsonVolumesRegion withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("sizes")
    public Object sizes;
    public ListAllVolumes200ApplicationJsonVolumesRegion withSizes(Object sizes) {
        this.sizes = sizes;
        return this;
    }
    @JsonProperty("slug")
    public String slug;
    public ListAllVolumes200ApplicationJsonVolumesRegion withSlug(String slug) {
        this.slug = slug;
        return this;
    }
}