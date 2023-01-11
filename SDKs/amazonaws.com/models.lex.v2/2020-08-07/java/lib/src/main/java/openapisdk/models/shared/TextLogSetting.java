package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * TextLogSetting
 * Defines settings to enable text conversation logs.
**/
public class TextLogSetting {
    @JsonProperty("destination")
    public TextLogDestination destination;
    public TextLogSetting withDestination(TextLogDestination destination) {
        this.destination = destination;
        return this;
    }
    @JsonProperty("enabled")
    public Boolean enabled;
    public TextLogSetting withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
}