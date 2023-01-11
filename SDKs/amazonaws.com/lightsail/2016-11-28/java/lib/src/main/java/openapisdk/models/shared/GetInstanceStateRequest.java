package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetInstanceStateRequest {
    @JsonProperty("instanceName")
    public String instanceName;
    public GetInstanceStateRequest withInstanceName(String instanceName) {
        this.instanceName = instanceName;
        return this;
    }
}