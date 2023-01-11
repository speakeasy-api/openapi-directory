package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class RejectSharedDirectoryRequest {
    @JsonProperty("SharedDirectoryId")
    public String sharedDirectoryId;
    public RejectSharedDirectoryRequest withSharedDirectoryId(String sharedDirectoryId) {
        this.sharedDirectoryId = sharedDirectoryId;
        return this;
    }
}