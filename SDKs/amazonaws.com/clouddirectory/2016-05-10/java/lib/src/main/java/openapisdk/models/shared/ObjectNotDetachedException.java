package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ObjectNotDetachedException
 * Indicates that the requested operation cannot be completed because the object has not been detached from the tree.
**/
public class ObjectNotDetachedException {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Message")
    public String message;
    public ObjectNotDetachedException withMessage(String message) {
        this.message = message;
        return this;
    }
}