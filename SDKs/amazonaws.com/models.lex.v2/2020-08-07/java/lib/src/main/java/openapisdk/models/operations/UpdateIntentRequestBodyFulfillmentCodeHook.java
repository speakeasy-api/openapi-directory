package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateIntentRequestBodyFulfillmentCodeHook
 * Determines if a Lambda function should be invoked for a specific intent.
**/
public class UpdateIntentRequestBodyFulfillmentCodeHook {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enabled")
    public Boolean enabled;
    public UpdateIntentRequestBodyFulfillmentCodeHook withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
}