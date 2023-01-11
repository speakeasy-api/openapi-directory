package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ThrottlingException
 * The calls to the GetEntitlements API are throttled.
**/
public class ThrottlingException {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public ThrottlingException withMessage(String message) {
        this.message = message;
        return this;
    }
}