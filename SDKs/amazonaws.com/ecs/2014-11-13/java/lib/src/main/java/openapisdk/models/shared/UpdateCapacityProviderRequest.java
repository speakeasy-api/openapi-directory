package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateCapacityProviderRequest {
    @JsonProperty("autoScalingGroupProvider")
    public AutoScalingGroupProviderUpdate autoScalingGroupProvider;
    public UpdateCapacityProviderRequest withAutoScalingGroupProvider(AutoScalingGroupProviderUpdate autoScalingGroupProvider) {
        this.autoScalingGroupProvider = autoScalingGroupProvider;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public UpdateCapacityProviderRequest withName(String name) {
        this.name = name;
        return this;
    }
}