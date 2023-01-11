package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InstanceConfiguration
 * Defines a custom source AMI and block device mapping configurations of an instance used for building and testing container images.
**/
public class InstanceConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("blockDeviceMappings")
    public InstanceBlockDeviceMapping[] blockDeviceMappings;
    public InstanceConfiguration withBlockDeviceMappings(InstanceBlockDeviceMapping[] blockDeviceMappings) {
        this.blockDeviceMappings = blockDeviceMappings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("image")
    public String image;
    public InstanceConfiguration withImage(String image) {
        this.image = image;
        return this;
    }
}