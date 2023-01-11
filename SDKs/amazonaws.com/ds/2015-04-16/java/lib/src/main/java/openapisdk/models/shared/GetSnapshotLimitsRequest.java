package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetSnapshotLimitsRequest
 * Contains the inputs for the <a>GetSnapshotLimits</a> operation.
**/
public class GetSnapshotLimitsRequest {
    @JsonProperty("DirectoryId")
    public String directoryId;
    public GetSnapshotLimitsRequest withDirectoryId(String directoryId) {
        this.directoryId = directoryId;
        return this;
    }
}