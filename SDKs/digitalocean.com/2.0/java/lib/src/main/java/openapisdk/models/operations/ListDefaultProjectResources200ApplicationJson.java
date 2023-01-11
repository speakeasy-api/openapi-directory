package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListDefaultProjectResources200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public ListDefaultProjectResources200ApplicationJsonLinks links;
    public ListDefaultProjectResources200ApplicationJson withLinks(ListDefaultProjectResources200ApplicationJsonLinks links) {
        this.links = links;
        return this;
    }
    @JsonProperty("meta")
    public ListDefaultProjectResources200ApplicationJsonMeta meta;
    public ListDefaultProjectResources200ApplicationJson withMeta(ListDefaultProjectResources200ApplicationJsonMeta meta) {
        this.meta = meta;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resources")
    public ListDefaultProjectResources200ApplicationJsonResources[] resources;
    public ListDefaultProjectResources200ApplicationJson withResources(ListDefaultProjectResources200ApplicationJsonResources[] resources) {
        this.resources = resources;
        return this;
    }
}