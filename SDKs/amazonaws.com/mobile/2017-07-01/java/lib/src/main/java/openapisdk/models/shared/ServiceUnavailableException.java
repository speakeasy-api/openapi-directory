package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ServiceUnavailableException
 *  The service is temporarily unavailable. The request should be retried after some time delay. 
**/
public class ServiceUnavailableException {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public ServiceUnavailableException withMessage(String message) {
        this.message = message;
        return this;
    }
}