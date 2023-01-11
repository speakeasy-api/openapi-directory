package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DescribeLoadBasedAutoScalingResult
 * Contains the response to a <code>DescribeLoadBasedAutoScaling</code> request.
**/
public class DescribeLoadBasedAutoScalingResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LoadBasedAutoScalingConfigurations")
    public LoadBasedAutoScalingConfiguration[] loadBasedAutoScalingConfigurations;
    public DescribeLoadBasedAutoScalingResult withLoadBasedAutoScalingConfigurations(LoadBasedAutoScalingConfiguration[] loadBasedAutoScalingConfigurations) {
        this.loadBasedAutoScalingConfigurations = loadBasedAutoScalingConfigurations;
        return this;
    }
}