package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UnsupportedIndexTypeException
 * Indicates that the requested index type is not supported.
**/
public class UnsupportedIndexTypeException {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Message")
    public String message;
    public UnsupportedIndexTypeException withMessage(String message) {
        this.message = message;
        return this;
    }
}