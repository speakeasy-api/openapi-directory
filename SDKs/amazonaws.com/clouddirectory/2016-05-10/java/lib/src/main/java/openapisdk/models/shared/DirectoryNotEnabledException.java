package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DirectoryNotEnabledException
 * Operations are only permitted on enabled directories.
**/
public class DirectoryNotEnabledException {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Message")
    public String message;
    public DirectoryNotEnabledException withMessage(String message) {
        this.message = message;
        return this;
    }
}