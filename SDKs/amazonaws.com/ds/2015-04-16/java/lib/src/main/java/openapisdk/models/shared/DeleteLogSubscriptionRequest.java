package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteLogSubscriptionRequest {
    @JsonProperty("DirectoryId")
    public String directoryId;
    public DeleteLogSubscriptionRequest withDirectoryId(String directoryId) {
        this.directoryId = directoryId;
        return this;
    }
}