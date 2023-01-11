package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetReplicationConfigurationRequestBody {
    @JsonProperty("sourceServerID")
    public String sourceServerID;
    public GetReplicationConfigurationRequestBody withSourceServerId(String sourceServerID) {
        this.sourceServerID = sourceServerID;
        return this;
    }
}