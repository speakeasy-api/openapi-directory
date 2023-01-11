package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateMicrosoftAdResult
 * Result of a CreateMicrosoftAD request.
**/
public class CreateMicrosoftAdResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DirectoryId")
    public String directoryId;
    public CreateMicrosoftAdResult withDirectoryId(String directoryId) {
        this.directoryId = directoryId;
        return this;
    }
}