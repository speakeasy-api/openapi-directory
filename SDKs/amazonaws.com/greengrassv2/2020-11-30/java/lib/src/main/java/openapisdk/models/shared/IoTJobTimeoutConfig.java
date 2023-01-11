package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * IoTJobTimeoutConfig
 * Contains information about the timeout configuration for a job.
**/
public class IoTJobTimeoutConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inProgressTimeoutInMinutes")
    public Long inProgressTimeoutInMinutes;
    public IoTJobTimeoutConfig withInProgressTimeoutInMinutes(Long inProgressTimeoutInMinutes) {
        this.inProgressTimeoutInMinutes = inProgressTimeoutInMinutes;
        return this;
    }
}