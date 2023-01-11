package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * AutoScalingUpdate
 * The updates to the auto scaling parameters for the connector.
**/
public class AutoScalingUpdate {
    @JsonProperty("maxWorkerCount")
    public Long maxWorkerCount;
    public AutoScalingUpdate withMaxWorkerCount(Long maxWorkerCount) {
        this.maxWorkerCount = maxWorkerCount;
        return this;
    }
    @JsonProperty("mcuCount")
    public Long mcuCount;
    public AutoScalingUpdate withMcuCount(Long mcuCount) {
        this.mcuCount = mcuCount;
        return this;
    }
    @JsonProperty("minWorkerCount")
    public Long minWorkerCount;
    public AutoScalingUpdate withMinWorkerCount(Long minWorkerCount) {
        this.minWorkerCount = minWorkerCount;
        return this;
    }
    @JsonProperty("scaleInPolicy")
    public ScaleInPolicyUpdate scaleInPolicy;
    public AutoScalingUpdate withScaleInPolicy(ScaleInPolicyUpdate scaleInPolicy) {
        this.scaleInPolicy = scaleInPolicy;
        return this;
    }
    @JsonProperty("scaleOutPolicy")
    public ScaleOutPolicyUpdate scaleOutPolicy;
    public AutoScalingUpdate withScaleOutPolicy(ScaleOutPolicyUpdate scaleOutPolicy) {
        this.scaleOutPolicy = scaleOutPolicy;
        return this;
    }
}