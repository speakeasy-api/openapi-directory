package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UnshareDirectoryRequest {
    @JsonProperty("DirectoryId")
    public String directoryId;
    public UnshareDirectoryRequest withDirectoryId(String directoryId) {
        this.directoryId = directoryId;
        return this;
    }
    @JsonProperty("UnshareTarget")
    public UnshareTarget unshareTarget;
    public UnshareDirectoryRequest withUnshareTarget(UnshareTarget unshareTarget) {
        this.unshareTarget = unshareTarget;
        return this;
    }
}