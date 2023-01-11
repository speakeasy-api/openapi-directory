package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * AcknowledgeFlow
 * Specifies whether to get notified for alarm state changes.
**/
public class AcknowledgeFlow {
    @JsonProperty("enabled")
    public Boolean enabled;
    public AcknowledgeFlow withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
}