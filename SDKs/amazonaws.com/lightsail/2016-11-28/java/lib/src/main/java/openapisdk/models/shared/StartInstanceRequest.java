package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class StartInstanceRequest {
    @JsonProperty("instanceName")
    public String instanceName;
    public StartInstanceRequest withInstanceName(String instanceName) {
        this.instanceName = instanceName;
        return this;
    }
}