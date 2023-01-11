package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InvalidNextTokenException
 * Indicates that the <code>NextToken</code> value is not valid.
**/
public class InvalidNextTokenException {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Message")
    public String message;
    public InvalidNextTokenException withMessage(String message) {
        this.message = message;
        return this;
    }
}