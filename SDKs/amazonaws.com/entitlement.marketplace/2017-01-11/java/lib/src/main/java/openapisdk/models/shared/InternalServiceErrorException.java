package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InternalServiceErrorException
 * An internal error has occurred. Retry your request. If the problem persists, post a message with details on the AWS forums.
**/
public class InternalServiceErrorException {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public InternalServiceErrorException withMessage(String message) {
        this.message = message;
        return this;
    }
}