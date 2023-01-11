package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateContainerRecipeRequestBodyInstanceConfiguration
 * Defines a custom source AMI and block device mapping configurations of an instance used for building and testing container images.
**/
public class CreateContainerRecipeRequestBodyInstanceConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("blockDeviceMappings")
    public openapisdk.models.shared.InstanceBlockDeviceMapping[] blockDeviceMappings;
    public CreateContainerRecipeRequestBodyInstanceConfiguration withBlockDeviceMappings(openapisdk.models.shared.InstanceBlockDeviceMapping[] blockDeviceMappings) {
        this.blockDeviceMappings = blockDeviceMappings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("image")
    public String image;
    public CreateContainerRecipeRequestBodyInstanceConfiguration withImage(String image) {
        this.image = image;
        return this;
    }
}