package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class RemoveRegionRequest {
    @JsonProperty("DirectoryId")
    public String directoryId;
    public RemoveRegionRequest withDirectoryId(String directoryId) {
        this.directoryId = directoryId;
        return this;
    }
}