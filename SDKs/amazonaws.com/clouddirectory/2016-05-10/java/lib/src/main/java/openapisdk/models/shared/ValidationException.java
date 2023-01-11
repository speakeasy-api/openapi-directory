package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ValidationException
 * Indicates that your request is malformed in some manner. See the exception message.
**/
public class ValidationException {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Message")
    public String message;
    public ValidationException withMessage(String message) {
        this.message = message;
        return this;
    }
}