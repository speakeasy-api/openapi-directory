package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeAutoScalingConfigurationRequest {
    @JsonProperty("AutoScalingConfigurationArn")
    public String autoScalingConfigurationArn;
    public DescribeAutoScalingConfigurationRequest withAutoScalingConfigurationArn(String autoScalingConfigurationArn) {
        this.autoScalingConfigurationArn = autoScalingConfigurationArn;
        return this;
    }
}