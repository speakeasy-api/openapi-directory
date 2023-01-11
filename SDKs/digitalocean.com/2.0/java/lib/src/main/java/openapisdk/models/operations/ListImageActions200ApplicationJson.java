package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListImageActions200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("actions")
    public openapisdk.models.shared.Onev21actionsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesActionsItems[] actions;
    public ListImageActions200ApplicationJson withActions(openapisdk.models.shared.Onev21actionsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesActionsItems[] actions) {
        this.actions = actions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public ListImageActions200ApplicationJsonLinks links;
    public ListImageActions200ApplicationJson withLinks(ListImageActions200ApplicationJsonLinks links) {
        this.links = links;
        return this;
    }
    @JsonProperty("meta")
    public ListImageActions200ApplicationJsonMeta meta;
    public ListImageActions200ApplicationJson withMeta(ListImageActions200ApplicationJsonMeta meta) {
        this.meta = meta;
        return this;
    }
}