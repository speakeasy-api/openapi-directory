package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InvalidParameterException
 * One or more parameters in your request was invalid.
**/
public class InvalidParameterException {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public InvalidParameterException withMessage(String message) {
        this.message = message;
        return this;
    }
}