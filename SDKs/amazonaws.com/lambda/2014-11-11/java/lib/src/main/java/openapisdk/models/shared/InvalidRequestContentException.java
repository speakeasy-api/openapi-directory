package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InvalidRequestContentException
 * The request body could not be parsed as JSON.
**/
public class InvalidRequestContentException {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Type")
    public String type;
    public InvalidRequestContentException withType(String type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public InvalidRequestContentException withMessage(String message) {
        this.message = message;
        return this;
    }
}