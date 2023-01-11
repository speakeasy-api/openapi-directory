package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ConnectDirectoryResult
 * Contains the results of the <a>ConnectDirectory</a> operation.
**/
public class ConnectDirectoryResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DirectoryId")
    public String directoryId;
    public ConnectDirectoryResult withDirectoryId(String directoryId) {
        this.directoryId = directoryId;
        return this;
    }
}