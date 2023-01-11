package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListAllSizes200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public ListAllSizes200ApplicationJsonLinks links;
    public ListAllSizes200ApplicationJson withLinks(ListAllSizes200ApplicationJsonLinks links) {
        this.links = links;
        return this;
    }
    @JsonProperty("meta")
    public ListAllSizes200ApplicationJsonMeta meta;
    public ListAllSizes200ApplicationJson withMeta(ListAllSizes200ApplicationJsonMeta meta) {
        this.meta = meta;
        return this;
    }
    @JsonProperty("sizes")
    public openapisdk.models.shared.Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsPropertiesSize[] sizes;
    public ListAllSizes200ApplicationJson withSizes(openapisdk.models.shared.Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsPropertiesSize[] sizes) {
        this.sizes = sizes;
        return this;
    }
}