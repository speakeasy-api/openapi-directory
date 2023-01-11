package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BatchRetryStrategy
 * The retry strategy to use for failed jobs, if the target is an Batch job. If you specify a retry strategy here, it overrides the retry strategy defined in the job definition.
**/
public class BatchRetryStrategy {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Attempts")
    public Long attempts;
    public BatchRetryStrategy withAttempts(Long attempts) {
        this.attempts = attempts;
        return this;
    }
}