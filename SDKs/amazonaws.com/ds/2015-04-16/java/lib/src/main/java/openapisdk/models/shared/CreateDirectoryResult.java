package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateDirectoryResult
 * Contains the results of the <a>CreateDirectory</a> operation.
**/
public class CreateDirectoryResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DirectoryId")
    public String directoryId;
    public CreateDirectoryResult withDirectoryId(String directoryId) {
        this.directoryId = directoryId;
        return this;
    }
}