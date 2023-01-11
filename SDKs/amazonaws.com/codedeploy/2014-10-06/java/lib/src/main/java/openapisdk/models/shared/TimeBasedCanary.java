package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TimeBasedCanary
 * A configuration that shifts traffic from one version of a Lambda function or ECS task set to another in two increments. The original and target Lambda function versions or ECS task sets are specified in the deployment's AppSpec file.
**/
public class TimeBasedCanary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canaryInterval")
    public Long canaryInterval;
    public TimeBasedCanary withCanaryInterval(Long canaryInterval) {
        this.canaryInterval = canaryInterval;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canaryPercentage")
    public Long canaryPercentage;
    public TimeBasedCanary withCanaryPercentage(Long canaryPercentage) {
        this.canaryPercentage = canaryPercentage;
        return this;
    }
}