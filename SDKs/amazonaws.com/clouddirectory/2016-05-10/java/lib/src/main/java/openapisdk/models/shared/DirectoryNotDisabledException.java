package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DirectoryNotDisabledException
 * An operation can only operate on a disabled directory.
**/
public class DirectoryNotDisabledException {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Message")
    public String message;
    public DirectoryNotDisabledException withMessage(String message) {
        this.message = message;
        return this;
    }
}