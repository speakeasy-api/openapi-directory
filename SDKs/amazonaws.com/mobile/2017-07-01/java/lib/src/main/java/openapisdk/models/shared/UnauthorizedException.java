package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UnauthorizedException
 *  Credentials of the caller are insufficient to authorize the request. 
**/
public class UnauthorizedException {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public UnauthorizedException withMessage(String message) {
        this.message = message;
        return this;
    }
}