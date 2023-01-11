package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListFloatingIpActions200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("actions")
    public openapisdk.models.shared.Onev21actionsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesActionsItems[] actions;
    public ListFloatingIpActions200ApplicationJson withActions(openapisdk.models.shared.Onev21actionsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesActionsItems[] actions) {
        this.actions = actions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public ListFloatingIpActions200ApplicationJsonLinks links;
    public ListFloatingIpActions200ApplicationJson withLinks(ListFloatingIpActions200ApplicationJsonLinks links) {
        this.links = links;
        return this;
    }
    @JsonProperty("meta")
    public ListFloatingIpActions200ApplicationJsonMeta meta;
    public ListFloatingIpActions200ApplicationJson withMeta(ListFloatingIpActions200ApplicationJsonMeta meta) {
        this.meta = meta;
        return this;
    }
}