package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * InferenceAccelerator
 * Details on a Elastic Inference accelerator. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-eia.html">Working with Amazon Elastic Inference on Amazon ECS</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.
**/
public class InferenceAccelerator {
    @JsonProperty("deviceName")
    public String deviceName;
    public InferenceAccelerator withDeviceName(String deviceName) {
        this.deviceName = deviceName;
        return this;
    }
    @JsonProperty("deviceType")
    public String deviceType;
    public InferenceAccelerator withDeviceType(String deviceType) {
        this.deviceType = deviceType;
        return this;
    }
}