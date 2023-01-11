package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteAutoScalingConfigurationRequest {
    @JsonProperty("AutoScalingConfigurationArn")
    public String autoScalingConfigurationArn;
    public DeleteAutoScalingConfigurationRequest withAutoScalingConfigurationArn(String autoScalingConfigurationArn) {
        this.autoScalingConfigurationArn = autoScalingConfigurationArn;
        return this;
    }
}