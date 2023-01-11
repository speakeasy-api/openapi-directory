package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class StartInstanceRequest {
    @JsonProperty("InstanceId")
    public String instanceId;
    public StartInstanceRequest withInstanceId(String instanceId) {
        this.instanceId = instanceId;
        return this;
    }
}