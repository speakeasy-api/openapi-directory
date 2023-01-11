package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListProjectResources200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public ListProjectResources200ApplicationJsonLinks links;
    public ListProjectResources200ApplicationJson withLinks(ListProjectResources200ApplicationJsonLinks links) {
        this.links = links;
        return this;
    }
    @JsonProperty("meta")
    public ListProjectResources200ApplicationJsonMeta meta;
    public ListProjectResources200ApplicationJson withMeta(ListProjectResources200ApplicationJsonMeta meta) {
        this.meta = meta;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resources")
    public ListProjectResources200ApplicationJsonResources[] resources;
    public ListProjectResources200ApplicationJson withResources(ListProjectResources200ApplicationJsonResources[] resources) {
        this.resources = resources;
        return this;
    }
}