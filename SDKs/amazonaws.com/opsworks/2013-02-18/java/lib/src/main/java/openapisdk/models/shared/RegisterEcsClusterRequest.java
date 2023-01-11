package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class RegisterEcsClusterRequest {
    @JsonProperty("EcsClusterArn")
    public String ecsClusterArn;
    public RegisterEcsClusterRequest withEcsClusterArn(String ecsClusterArn) {
        this.ecsClusterArn = ecsClusterArn;
        return this;
    }
    @JsonProperty("StackId")
    public String stackId;
    public RegisterEcsClusterRequest withStackId(String stackId) {
        this.stackId = stackId;
        return this;
    }
}