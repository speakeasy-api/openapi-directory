package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostVolumeActionByNameRequestBody1 {
    @JsonProperty("droplet_id")
    public Long dropletId;
    public PostVolumeActionByNameRequestBody1 withDropletId(Long dropletId) {
        this.dropletId = dropletId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("region")
    public openapisdk.models.shared.Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsPropertiesImagePropertiesRegionsItemsEnum region;
    public PostVolumeActionByNameRequestBody1 withRegion(openapisdk.models.shared.Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsPropertiesImagePropertiesRegionsItemsEnum region) {
        this.region = region;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public String[] tags;
    public PostVolumeActionByNameRequestBody1 withTags(String[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonProperty("type")
    public PostVolumeActionByNameRequestBody1TypeEnum type;
    public PostVolumeActionByNameRequestBody1 withType(PostVolumeActionByNameRequestBody1TypeEnum type) {
        this.type = type;
        return this;
    }
}