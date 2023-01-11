package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * IndexedAttributeMissingException
 * An object has been attempted to be attached to an object that does not have the appropriate attribute value.
**/
public class IndexedAttributeMissingException {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Message")
    public String message;
    public IndexedAttributeMissingException withMessage(String message) {
        this.message = message;
        return this;
    }
}