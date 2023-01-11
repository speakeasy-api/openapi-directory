package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * NotIndexException
 * Indicates that the requested operation can only operate on index objects.
**/
public class NotIndexException {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Message")
    public String message;
    public NotIndexException withMessage(String message) {
        this.message = message;
        return this;
    }
}