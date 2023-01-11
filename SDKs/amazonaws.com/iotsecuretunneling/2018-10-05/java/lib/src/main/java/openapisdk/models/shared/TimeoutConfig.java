package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TimeoutConfig
 * Tunnel timeout configuration.
**/
public class TimeoutConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxLifetimeTimeoutMinutes")
    public Long maxLifetimeTimeoutMinutes;
    public TimeoutConfig withMaxLifetimeTimeoutMinutes(Long maxLifetimeTimeoutMinutes) {
        this.maxLifetimeTimeoutMinutes = maxLifetimeTimeoutMinutes;
        return this;
    }
}