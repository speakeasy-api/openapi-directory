package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostImageActionRequestBody2 {
    @JsonProperty("region")
    public openapisdk.models.shared.Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsPropertiesImagePropertiesRegionsItemsEnum region;
    public PostImageActionRequestBody2 withRegion(openapisdk.models.shared.Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsPropertiesImagePropertiesRegionsItemsEnum region) {
        this.region = region;
        return this;
    }
    @JsonProperty("type")
    public PostImageActionRequestBody2TypeEnum type;
    public PostImageActionRequestBody2 withType(PostImageActionRequestBody2TypeEnum type) {
        this.type = type;
        return this;
    }
}