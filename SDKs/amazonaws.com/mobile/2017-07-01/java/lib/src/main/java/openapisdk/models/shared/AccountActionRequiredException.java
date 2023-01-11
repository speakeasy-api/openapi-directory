package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AccountActionRequiredException
 *  Account Action is required in order to continue the request. 
**/
public class AccountActionRequiredException {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public AccountActionRequiredException withMessage(String message) {
        this.message = message;
        return this;
    }
}