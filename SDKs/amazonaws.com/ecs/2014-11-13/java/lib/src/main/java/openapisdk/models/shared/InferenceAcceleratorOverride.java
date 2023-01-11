package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InferenceAcceleratorOverride
 * Details on an Elastic Inference accelerator task override. This parameter is used to override the Elastic Inference accelerator specified in the task definition. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-eia.html">Working with Amazon Elastic Inference on Amazon ECS</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.
**/
public class InferenceAcceleratorOverride {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deviceName")
    public String deviceName;
    public InferenceAcceleratorOverride withDeviceName(String deviceName) {
        this.deviceName = deviceName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deviceType")
    public String deviceType;
    public InferenceAcceleratorOverride withDeviceType(String deviceType) {
        this.deviceType = deviceType;
        return this;
    }
}