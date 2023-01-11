package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListAllDroplets200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("droplets")
    public ListAllDroplets200ApplicationJsonDroplets[] droplets;
    public ListAllDroplets200ApplicationJson withDroplets(ListAllDroplets200ApplicationJsonDroplets[] droplets) {
        this.droplets = droplets;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public ListAllDroplets200ApplicationJsonLinks links;
    public ListAllDroplets200ApplicationJson withLinks(ListAllDroplets200ApplicationJsonLinks links) {
        this.links = links;
        return this;
    }
    @JsonProperty("meta")
    public ListAllDroplets200ApplicationJsonMeta meta;
    public ListAllDroplets200ApplicationJson withMeta(ListAllDroplets200ApplicationJsonMeta meta) {
        this.meta = meta;
        return this;
    }
}