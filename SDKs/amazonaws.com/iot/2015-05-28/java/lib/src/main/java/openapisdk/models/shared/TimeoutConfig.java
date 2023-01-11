package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TimeoutConfig
 * Specifies the amount of time each device has to finish its execution of the job. A timer is started when the job execution status is set to <code>IN_PROGRESS</code>. If the job execution status is not set to another terminal state before the timer expires, it will be automatically set to <code>TIMED_OUT</code>.
**/
public class TimeoutConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inProgressTimeoutInMinutes")
    public Long inProgressTimeoutInMinutes;
    public TimeoutConfig withInProgressTimeoutInMinutes(Long inProgressTimeoutInMinutes) {
        this.inProgressTimeoutInMinutes = inProgressTimeoutInMinutes;
        return this;
    }
}