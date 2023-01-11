package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DirectoryDeletedException
 * A directory that has been deleted and to which access has been attempted. Note: The requested resource will eventually cease to exist.
**/
public class DirectoryDeletedException {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Message")
    public String message;
    public DirectoryDeletedException withMessage(String message) {
        this.message = message;
        return this;
    }
}