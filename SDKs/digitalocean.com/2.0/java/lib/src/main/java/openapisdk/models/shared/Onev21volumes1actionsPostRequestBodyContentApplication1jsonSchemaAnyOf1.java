package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Onev21volumes1actionsPostRequestBodyContentApplication1jsonSchemaAnyOf1 {
    @JsonProperty("droplet_id")
    public Long dropletId;
    public Onev21volumes1actionsPostRequestBodyContentApplication1jsonSchemaAnyOf1 withDropletId(Long dropletId) {
        this.dropletId = dropletId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("region")
    public Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsPropertiesImagePropertiesRegionsItemsEnum region;
    public Onev21volumes1actionsPostRequestBodyContentApplication1jsonSchemaAnyOf1 withRegion(Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsPropertiesImagePropertiesRegionsItemsEnum region) {
        this.region = region;
        return this;
    }
    @JsonProperty("type")
    public Onev21volumes1actionsPostRequestBodyContentApplication1jsonSchemaAnyOf1TypeEnum type;
    public Onev21volumes1actionsPostRequestBodyContentApplication1jsonSchemaAnyOf1 withType(Onev21volumes1actionsPostRequestBodyContentApplication1jsonSchemaAnyOf1TypeEnum type) {
        this.type = type;
        return this;
    }
}