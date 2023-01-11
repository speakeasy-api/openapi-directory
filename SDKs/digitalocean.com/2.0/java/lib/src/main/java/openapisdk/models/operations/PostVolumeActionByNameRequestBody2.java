package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostVolumeActionByNameRequestBody2 {
    @JsonProperty("droplet_id")
    public Long dropletId;
    public PostVolumeActionByNameRequestBody2 withDropletId(Long dropletId) {
        this.dropletId = dropletId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("region")
    public openapisdk.models.shared.Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsPropertiesImagePropertiesRegionsItemsEnum region;
    public PostVolumeActionByNameRequestBody2 withRegion(openapisdk.models.shared.Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsPropertiesImagePropertiesRegionsItemsEnum region) {
        this.region = region;
        return this;
    }
    @JsonProperty("type")
    public PostVolumeActionByNameRequestBody2TypeEnum type;
    public PostVolumeActionByNameRequestBody2 withType(PostVolumeActionByNameRequestBody2TypeEnum type) {
        this.type = type;
        return this;
    }
}