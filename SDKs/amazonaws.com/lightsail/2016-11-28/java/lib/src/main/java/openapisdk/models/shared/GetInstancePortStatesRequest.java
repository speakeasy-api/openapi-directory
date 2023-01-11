package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetInstancePortStatesRequest {
    @JsonProperty("instanceName")
    public String instanceName;
    public GetInstancePortStatesRequest withInstanceName(String instanceName) {
        this.instanceName = instanceName;
        return this;
    }
}