package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetInstanceRequest {
    @JsonProperty("instanceName")
    public String instanceName;
    public GetInstanceRequest withInstanceName(String instanceName) {
        this.instanceName = instanceName;
        return this;
    }
}