package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AcceptSharedDirectoryRequest {
    @JsonProperty("SharedDirectoryId")
    public String sharedDirectoryId;
    public AcceptSharedDirectoryRequest withSharedDirectoryId(String sharedDirectoryId) {
        this.sharedDirectoryId = sharedDirectoryId;
        return this;
    }
}