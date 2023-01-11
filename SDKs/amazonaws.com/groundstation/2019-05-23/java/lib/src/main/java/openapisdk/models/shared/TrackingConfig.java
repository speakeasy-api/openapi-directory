package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * TrackingConfig
 * Object that determines whether tracking should be used during a contact executed with this <code>Config</code> in the mission profile.
**/
public class TrackingConfig {
    @JsonProperty("autotrack")
    public CriticalityEnum autotrack;
    public TrackingConfig withAutotrack(CriticalityEnum autotrack) {
        this.autotrack = autotrack;
        return this;
    }
}