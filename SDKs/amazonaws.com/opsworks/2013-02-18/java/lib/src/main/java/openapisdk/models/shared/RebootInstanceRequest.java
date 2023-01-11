package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class RebootInstanceRequest {
    @JsonProperty("InstanceId")
    public String instanceId;
    public RebootInstanceRequest withInstanceId(String instanceId) {
        this.instanceId = instanceId;
        return this;
    }
}