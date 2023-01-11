package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AutoScalingGroupConfiguration
 * Describes the configuration of an Auto Scaling group.
**/
public class AutoScalingGroupConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("desiredCapacity")
    public Long desiredCapacity;
    public AutoScalingGroupConfiguration withDesiredCapacity(Long desiredCapacity) {
        this.desiredCapacity = desiredCapacity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("instanceType")
    public String instanceType;
    public AutoScalingGroupConfiguration withInstanceType(String instanceType) {
        this.instanceType = instanceType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxSize")
    public Long maxSize;
    public AutoScalingGroupConfiguration withMaxSize(Long maxSize) {
        this.maxSize = maxSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minSize")
    public Long minSize;
    public AutoScalingGroupConfiguration withMinSize(Long minSize) {
        this.minSize = minSize;
        return this;
    }
}