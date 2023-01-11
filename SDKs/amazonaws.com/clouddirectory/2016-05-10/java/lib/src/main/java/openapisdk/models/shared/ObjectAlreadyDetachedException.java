package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ObjectAlreadyDetachedException
 * Indicates that the object is not attached to the index.
**/
public class ObjectAlreadyDetachedException {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Message")
    public String message;
    public ObjectAlreadyDetachedException withMessage(String message) {
        this.message = message;
        return this;
    }
}