package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostVolumeActionByIdRequestBody3 {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("region")
    public openapisdk.models.shared.Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsPropertiesImagePropertiesRegionsItemsEnum region;
    public PostVolumeActionByIdRequestBody3 withRegion(openapisdk.models.shared.Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsPropertiesImagePropertiesRegionsItemsEnum region) {
        this.region = region;
        return this;
    }
    @JsonProperty("size_gigabytes")
    public Long sizeGigabytes;
    public PostVolumeActionByIdRequestBody3 withSizeGigabytes(Long sizeGigabytes) {
        this.sizeGigabytes = sizeGigabytes;
        return this;
    }
    @JsonProperty("type")
    public PostVolumeActionByIdRequestBody3TypeEnum type;
    public PostVolumeActionByIdRequestBody3 withType(PostVolumeActionByIdRequestBody3TypeEnum type) {
        this.type = type;
        return this;
    }
}