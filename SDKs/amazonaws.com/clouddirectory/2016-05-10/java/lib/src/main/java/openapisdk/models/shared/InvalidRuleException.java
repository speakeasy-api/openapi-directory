package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InvalidRuleException
 * Occurs when any of the rule parameter keys or values are invalid.
**/
public class InvalidRuleException {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Message")
    public String message;
    public InvalidRuleException withMessage(String message) {
        this.message = message;
        return this;
    }
}