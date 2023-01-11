package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class RebootInstanceRequest {
    @JsonProperty("instanceName")
    public String instanceName;
    public RebootInstanceRequest withInstanceName(String instanceName) {
        this.instanceName = instanceName;
        return this;
    }
}