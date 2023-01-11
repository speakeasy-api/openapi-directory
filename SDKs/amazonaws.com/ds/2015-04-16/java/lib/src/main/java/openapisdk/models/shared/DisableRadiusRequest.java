package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DisableRadiusRequest
 * Contains the inputs for the <a>DisableRadius</a> operation.
**/
public class DisableRadiusRequest {
    @JsonProperty("DirectoryId")
    public String directoryId;
    public DisableRadiusRequest withDirectoryId(String directoryId) {
        this.directoryId = directoryId;
        return this;
    }
}