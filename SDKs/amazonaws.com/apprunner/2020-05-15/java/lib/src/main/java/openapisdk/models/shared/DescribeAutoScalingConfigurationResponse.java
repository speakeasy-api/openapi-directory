package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeAutoScalingConfigurationResponse {
    @JsonProperty("AutoScalingConfiguration")
    public AutoScalingConfiguration autoScalingConfiguration;
    public DescribeAutoScalingConfigurationResponse withAutoScalingConfiguration(AutoScalingConfiguration autoScalingConfiguration) {
        this.autoScalingConfiguration = autoScalingConfiguration;
        return this;
    }
}