package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DisconnectFromServiceRequestBody {
    @JsonProperty("sourceServerID")
    public String sourceServerID;
    public DisconnectFromServiceRequestBody withSourceServerId(String sourceServerID) {
        this.sourceServerID = sourceServerID;
        return this;
    }
}