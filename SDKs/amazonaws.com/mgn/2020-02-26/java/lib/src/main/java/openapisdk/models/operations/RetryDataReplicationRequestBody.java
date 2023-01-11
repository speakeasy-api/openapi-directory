package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class RetryDataReplicationRequestBody {
    @JsonProperty("sourceServerID")
    public String sourceServerID;
    public RetryDataReplicationRequestBody withSourceServerId(String sourceServerID) {
        this.sourceServerID = sourceServerID;
        return this;
    }
}