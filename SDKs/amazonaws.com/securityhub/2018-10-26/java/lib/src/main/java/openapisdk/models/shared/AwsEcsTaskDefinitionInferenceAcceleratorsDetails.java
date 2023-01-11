package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsEcsTaskDefinitionInferenceAcceleratorsDetails
 * An Elastic Inference accelerator to use for the containers in the task.
**/
public class AwsEcsTaskDefinitionInferenceAcceleratorsDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DeviceName")
    public String deviceName;
    public AwsEcsTaskDefinitionInferenceAcceleratorsDetails withDeviceName(String deviceName) {
        this.deviceName = deviceName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DeviceType")
    public String deviceType;
    public AwsEcsTaskDefinitionInferenceAcceleratorsDetails withDeviceType(String deviceType) {
        this.deviceType = deviceType;
        return this;
    }
}