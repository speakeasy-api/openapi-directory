package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TooManyRequestsException
 *  Too many requests have been received for this AWS account in too short a time. The request should be retried after some time delay. 
**/
public class TooManyRequestsException {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public TooManyRequestsException withMessage(String message) {
        this.message = message;
        return this;
    }
}