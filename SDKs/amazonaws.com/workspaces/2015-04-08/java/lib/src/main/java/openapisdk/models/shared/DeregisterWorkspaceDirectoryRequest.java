package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeregisterWorkspaceDirectoryRequest {
    @JsonProperty("DirectoryId")
    public String directoryId;
    public DeregisterWorkspaceDirectoryRequest withDirectoryId(String directoryId) {
        this.directoryId = directoryId;
        return this;
    }
}