package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * NotPolicyException
 * Indicates that the requested operation can only operate on policy objects.
**/
public class NotPolicyException {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Message")
    public String message;
    public NotPolicyException withMessage(String message) {
        this.message = message;
        return this;
    }
}