package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeregisterEcsClusterRequest {
    @JsonProperty("EcsClusterArn")
    public String ecsClusterArn;
    public DeregisterEcsClusterRequest withEcsClusterArn(String ecsClusterArn) {
        this.ecsClusterArn = ecsClusterArn;
        return this;
    }
}