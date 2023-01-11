package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateAutoScalingConfigurationResponse {
    @JsonProperty("AutoScalingConfiguration")
    public AutoScalingConfiguration autoScalingConfiguration;
    public CreateAutoScalingConfigurationResponse withAutoScalingConfiguration(AutoScalingConfiguration autoScalingConfiguration) {
        this.autoScalingConfiguration = autoScalingConfiguration;
        return this;
    }
}