package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class MarkAsArchivedRequestBody {
    @JsonProperty("sourceServerID")
    public String sourceServerID;
    public MarkAsArchivedRequestBody withSourceServerId(String sourceServerID) {
        this.sourceServerID = sourceServerID;
        return this;
    }
}