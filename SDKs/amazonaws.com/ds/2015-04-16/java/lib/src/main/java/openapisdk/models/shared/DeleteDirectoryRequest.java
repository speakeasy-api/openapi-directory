package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DeleteDirectoryRequest
 * Contains the inputs for the <a>DeleteDirectory</a> operation.
**/
public class DeleteDirectoryRequest {
    @JsonProperty("DirectoryId")
    public String directoryId;
    public DeleteDirectoryRequest withDirectoryId(String directoryId) {
        this.directoryId = directoryId;
        return this;
    }
}