package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SubmitJobRequestBodyTimeout
 * An object representing a job timeout configuration.
**/
public class SubmitJobRequestBodyTimeout {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attemptDurationSeconds")
    public Long attemptDurationSeconds;
    public SubmitJobRequestBodyTimeout withAttemptDurationSeconds(Long attemptDurationSeconds) {
        this.attemptDurationSeconds = attemptDurationSeconds;
        return this;
    }
}