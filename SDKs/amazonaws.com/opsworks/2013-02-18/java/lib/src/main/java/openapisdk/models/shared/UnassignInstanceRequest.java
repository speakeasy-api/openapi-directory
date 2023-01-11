package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UnassignInstanceRequest {
    @JsonProperty("InstanceId")
    public String instanceId;
    public UnassignInstanceRequest withInstanceId(String instanceId) {
        this.instanceId = instanceId;
        return this;
    }
}