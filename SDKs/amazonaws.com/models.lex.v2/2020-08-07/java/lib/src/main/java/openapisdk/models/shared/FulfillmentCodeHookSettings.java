package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * FulfillmentCodeHookSettings
 * Determines if a Lambda function should be invoked for a specific intent.
**/
public class FulfillmentCodeHookSettings {
    @JsonProperty("enabled")
    public Boolean enabled;
    public FulfillmentCodeHookSettings withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
}