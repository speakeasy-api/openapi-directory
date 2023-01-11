package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeTimeBasedAutoScalingRequest {
    @JsonProperty("InstanceIds")
    public String[] instanceIds;
    public DescribeTimeBasedAutoScalingRequest withInstanceIds(String[] instanceIds) {
        this.instanceIds = instanceIds;
        return this;
    }
}