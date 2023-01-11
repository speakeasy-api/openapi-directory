package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetImage200ApplicationJson {
    @JsonProperty("image")
    public openapisdk.models.shared.Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsPropertiesImage image;
    public GetImage200ApplicationJson withImage(openapisdk.models.shared.Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsPropertiesImage image) {
        this.image = image;
        return this;
    }
}