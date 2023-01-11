package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListDropletActions200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("actions")
    public openapisdk.models.shared.Onev21actionsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesActionsItems[] actions;
    public ListDropletActions200ApplicationJson withActions(openapisdk.models.shared.Onev21actionsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesActionsItems[] actions) {
        this.actions = actions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public ListDropletActions200ApplicationJsonLinks links;
    public ListDropletActions200ApplicationJson withLinks(ListDropletActions200ApplicationJsonLinks links) {
        this.links = links;
        return this;
    }
    @JsonProperty("meta")
    public ListDropletActions200ApplicationJsonMeta meta;
    public ListDropletActions200ApplicationJson withMeta(ListDropletActions200ApplicationJsonMeta meta) {
        this.meta = meta;
        return this;
    }
}