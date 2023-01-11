package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateSnapshotRequest
 * Contains the inputs for the <a>CreateSnapshot</a> operation.
**/
public class CreateSnapshotRequest {
    @JsonProperty("DirectoryId")
    public String directoryId;
    public CreateSnapshotRequest withDirectoryId(String directoryId) {
        this.directoryId = directoryId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public CreateSnapshotRequest withName(String name) {
        this.name = name;
        return this;
    }
}