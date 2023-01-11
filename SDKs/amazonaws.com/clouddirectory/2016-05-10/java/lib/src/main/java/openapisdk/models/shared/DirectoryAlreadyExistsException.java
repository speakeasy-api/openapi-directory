package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DirectoryAlreadyExistsException
 * Indicates that a <a>Directory</a> could not be created due to a naming conflict. Choose a different name and try again.
**/
public class DirectoryAlreadyExistsException {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Message")
    public String message;
    public DirectoryAlreadyExistsException withMessage(String message) {
        this.message = message;
        return this;
    }
}