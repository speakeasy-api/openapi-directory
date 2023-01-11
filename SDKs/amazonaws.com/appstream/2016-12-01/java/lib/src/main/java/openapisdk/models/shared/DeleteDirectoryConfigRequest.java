package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteDirectoryConfigRequest {
    @JsonProperty("DirectoryName")
    public String directoryName;
    public DeleteDirectoryConfigRequest withDirectoryName(String directoryName) {
        this.directoryName = directoryName;
        return this;
    }
}