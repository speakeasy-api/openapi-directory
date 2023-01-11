package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteSourceServerRequestBody {
    @JsonProperty("sourceServerID")
    public String sourceServerID;
    public DeleteSourceServerRequestBody withSourceServerId(String sourceServerID) {
        this.sourceServerID = sourceServerID;
        return this;
    }
}