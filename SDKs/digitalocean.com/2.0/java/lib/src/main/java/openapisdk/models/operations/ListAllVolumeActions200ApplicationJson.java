package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListAllVolumeActions200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("actions")
    public openapisdk.models.shared.Onev21volumes1actionsPostResponses202ContentApplication1jsonSchemaPropertiesAction[] actions;
    public ListAllVolumeActions200ApplicationJson withActions(openapisdk.models.shared.Onev21volumes1actionsPostResponses202ContentApplication1jsonSchemaPropertiesAction[] actions) {
        this.actions = actions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public ListAllVolumeActions200ApplicationJsonLinks links;
    public ListAllVolumeActions200ApplicationJson withLinks(ListAllVolumeActions200ApplicationJsonLinks links) {
        this.links = links;
        return this;
    }
    @JsonProperty("meta")
    public ListAllVolumeActions200ApplicationJsonMeta meta;
    public ListAllVolumeActions200ApplicationJson withMeta(ListAllVolumeActions200ApplicationJsonMeta meta) {
        this.meta = meta;
        return this;
    }
}