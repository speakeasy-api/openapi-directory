package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class FinalizeCutoverRequestBody {
    @JsonProperty("sourceServerID")
    public String sourceServerID;
    public FinalizeCutoverRequestBody withSourceServerId(String sourceServerID) {
        this.sourceServerID = sourceServerID;
        return this;
    }
}