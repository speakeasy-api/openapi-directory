package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * SseSpecification
 * Represents the settings used to enable server-side encryption.
**/
public class SseSpecification {
    @JsonProperty("Enabled")
    public Boolean enabled;
    public SseSpecification withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
}