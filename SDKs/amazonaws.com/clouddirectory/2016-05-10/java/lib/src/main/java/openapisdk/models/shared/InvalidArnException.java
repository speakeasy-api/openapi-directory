package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InvalidArnException
 * Indicates that the provided ARN value is not valid.
**/
public class InvalidArnException {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Message")
    public String message;
    public InvalidArnException withMessage(String message) {
        this.message = message;
        return this;
    }
}