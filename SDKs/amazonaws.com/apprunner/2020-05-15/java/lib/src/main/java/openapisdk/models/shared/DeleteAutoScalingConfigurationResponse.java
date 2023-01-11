package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteAutoScalingConfigurationResponse {
    @JsonProperty("AutoScalingConfiguration")
    public AutoScalingConfiguration autoScalingConfiguration;
    public DeleteAutoScalingConfigurationResponse withAutoScalingConfiguration(AutoScalingConfiguration autoScalingConfiguration) {
        this.autoScalingConfiguration = autoScalingConfiguration;
        return this;
    }
}