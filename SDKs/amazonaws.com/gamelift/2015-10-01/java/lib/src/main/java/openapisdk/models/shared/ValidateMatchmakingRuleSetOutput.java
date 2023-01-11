package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ValidateMatchmakingRuleSetOutput
 * Represents the returned data in response to a request operation.
**/
public class ValidateMatchmakingRuleSetOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Valid")
    public Boolean valid;
    public ValidateMatchmakingRuleSetOutput withValid(Boolean valid) {
        this.valid = valid;
        return this;
    }
}