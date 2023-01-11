package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AutoScaling
 * Specifies how the connector scales.
**/
public class AutoScaling {
    @JsonProperty("maxWorkerCount")
    public Long maxWorkerCount;
    public AutoScaling withMaxWorkerCount(Long maxWorkerCount) {
        this.maxWorkerCount = maxWorkerCount;
        return this;
    }
    @JsonProperty("mcuCount")
    public Long mcuCount;
    public AutoScaling withMcuCount(Long mcuCount) {
        this.mcuCount = mcuCount;
        return this;
    }
    @JsonProperty("minWorkerCount")
    public Long minWorkerCount;
    public AutoScaling withMinWorkerCount(Long minWorkerCount) {
        this.minWorkerCount = minWorkerCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scaleInPolicy")
    public ScaleInPolicy scaleInPolicy;
    public AutoScaling withScaleInPolicy(ScaleInPolicy scaleInPolicy) {
        this.scaleInPolicy = scaleInPolicy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scaleOutPolicy")
    public ScaleOutPolicy scaleOutPolicy;
    public AutoScaling withScaleOutPolicy(ScaleOutPolicy scaleOutPolicy) {
        this.scaleOutPolicy = scaleOutPolicy;
        return this;
    }
}