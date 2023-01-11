package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SetLoadBasedAutoScalingRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DownScaling")
    public AutoScalingThresholds downScaling;
    public SetLoadBasedAutoScalingRequest withDownScaling(AutoScalingThresholds downScaling) {
        this.downScaling = downScaling;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Enable")
    public Boolean enable;
    public SetLoadBasedAutoScalingRequest withEnable(Boolean enable) {
        this.enable = enable;
        return this;
    }
    @JsonProperty("LayerId")
    public String layerId;
    public SetLoadBasedAutoScalingRequest withLayerId(String layerId) {
        this.layerId = layerId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UpScaling")
    public AutoScalingThresholds upScaling;
    public SetLoadBasedAutoScalingRequest withUpScaling(AutoScalingThresholds upScaling) {
        this.upScaling = upScaling;
        return this;
    }
}