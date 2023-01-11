package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TimeInNanos
 * Contains a timestamp with optional nanosecond granularity.
**/
public class TimeInNanos {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("offsetInNanos")
    public Long offsetInNanos;
    public TimeInNanos withOffsetInNanos(Long offsetInNanos) {
        this.offsetInNanos = offsetInNanos;
        return this;
    }
    @JsonProperty("timeInSeconds")
    public Long timeInSeconds;
    public TimeInNanos withTimeInSeconds(Long timeInSeconds) {
        this.timeInSeconds = timeInSeconds;
        return this;
    }
}