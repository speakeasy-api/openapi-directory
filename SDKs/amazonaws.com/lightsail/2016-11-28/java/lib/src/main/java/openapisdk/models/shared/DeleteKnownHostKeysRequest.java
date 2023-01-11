package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteKnownHostKeysRequest {
    @JsonProperty("instanceName")
    public String instanceName;
    public DeleteKnownHostKeysRequest withInstanceName(String instanceName) {
        this.instanceName = instanceName;
        return this;
    }
}