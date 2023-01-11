package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DescribeTimeBasedAutoScalingResult
 * Contains the response to a <code>DescribeTimeBasedAutoScaling</code> request.
**/
public class DescribeTimeBasedAutoScalingResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TimeBasedAutoScalingConfigurations")
    public TimeBasedAutoScalingConfiguration[] timeBasedAutoScalingConfigurations;
    public DescribeTimeBasedAutoScalingResult withTimeBasedAutoScalingConfigurations(TimeBasedAutoScalingConfiguration[] timeBasedAutoScalingConfigurations) {
        this.timeBasedAutoScalingConfigurations = timeBasedAutoScalingConfigurations;
        return this;
    }
}