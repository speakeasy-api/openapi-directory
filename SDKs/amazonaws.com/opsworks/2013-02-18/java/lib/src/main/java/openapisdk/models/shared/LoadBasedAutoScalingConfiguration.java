package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LoadBasedAutoScalingConfiguration
 * Describes a layer's load-based auto scaling configuration.
**/
public class LoadBasedAutoScalingConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DownScaling")
    public AutoScalingThresholds downScaling;
    public LoadBasedAutoScalingConfiguration withDownScaling(AutoScalingThresholds downScaling) {
        this.downScaling = downScaling;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Enable")
    public Boolean enable;
    public LoadBasedAutoScalingConfiguration withEnable(Boolean enable) {
        this.enable = enable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LayerId")
    public String layerId;
    public LoadBasedAutoScalingConfiguration withLayerId(String layerId) {
        this.layerId = layerId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UpScaling")
    public AutoScalingThresholds upScaling;
    public LoadBasedAutoScalingConfiguration withUpScaling(AutoScalingThresholds upScaling) {
        this.upScaling = upScaling;
        return this;
    }
}