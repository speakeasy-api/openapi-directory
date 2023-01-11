package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * JobTimeout
 * An object representing a job timeout configuration.
**/
public class JobTimeout {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attemptDurationSeconds")
    public Long attemptDurationSeconds;
    public JobTimeout withAttemptDurationSeconds(Long attemptDurationSeconds) {
        this.attemptDurationSeconds = attemptDurationSeconds;
        return this;
    }
}