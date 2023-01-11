package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetImagesList200ApplicationJson {
    @JsonProperty("images")
    public openapisdk.models.shared.Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsPropertiesImage[] images;
    public GetImagesList200ApplicationJson withImages(openapisdk.models.shared.Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsPropertiesImage[] images) {
        this.images = images;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public GetImagesList200ApplicationJsonLinks links;
    public GetImagesList200ApplicationJson withLinks(GetImagesList200ApplicationJsonLinks links) {
        this.links = links;
        return this;
    }
    @JsonProperty("meta")
    public GetImagesList200ApplicationJsonMeta meta;
    public GetImagesList200ApplicationJson withMeta(GetImagesList200ApplicationJsonMeta meta) {
        this.meta = meta;
        return this;
    }
}