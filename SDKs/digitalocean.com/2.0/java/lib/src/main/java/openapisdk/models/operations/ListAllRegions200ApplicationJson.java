package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListAllRegions200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public ListAllRegions200ApplicationJsonLinks links;
    public ListAllRegions200ApplicationJson withLinks(ListAllRegions200ApplicationJsonLinks links) {
        this.links = links;
        return this;
    }
    @JsonProperty("meta")
    public ListAllRegions200ApplicationJsonMeta meta;
    public ListAllRegions200ApplicationJson withMeta(ListAllRegions200ApplicationJsonMeta meta) {
        this.meta = meta;
        return this;
    }
    @JsonProperty("regions")
    public openapisdk.models.shared.Onev21actionsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesActionsItemsPropertiesRegion[] regions;
    public ListAllRegions200ApplicationJson withRegions(openapisdk.models.shared.Onev21actionsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesActionsItemsPropertiesRegion[] regions) {
        this.regions = regions;
        return this;
    }
}