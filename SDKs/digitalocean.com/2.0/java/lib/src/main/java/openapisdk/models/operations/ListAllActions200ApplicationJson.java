package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListAllActions200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("actions")
    public ListAllActions200ApplicationJsonActions[] actions;
    public ListAllActions200ApplicationJson withActions(ListAllActions200ApplicationJsonActions[] actions) {
        this.actions = actions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public ListAllActions200ApplicationJsonLinks links;
    public ListAllActions200ApplicationJson withLinks(ListAllActions200ApplicationJsonLinks links) {
        this.links = links;
        return this;
    }
    @JsonProperty("meta")
    public ListAllActions200ApplicationJsonMeta meta;
    public ListAllActions200ApplicationJson withMeta(ListAllActions200ApplicationJsonMeta meta) {
        this.meta = meta;
        return this;
    }
}