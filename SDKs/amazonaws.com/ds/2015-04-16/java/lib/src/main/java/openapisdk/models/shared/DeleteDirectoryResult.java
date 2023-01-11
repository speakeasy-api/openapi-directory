package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DeleteDirectoryResult
 * Contains the results of the <a>DeleteDirectory</a> operation.
**/
public class DeleteDirectoryResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DirectoryId")
    public String directoryId;
    public DeleteDirectoryResult withDirectoryId(String directoryId) {
        this.directoryId = directoryId;
        return this;
    }
}