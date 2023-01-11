package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RetryPolicy
 * A <code>RetryPolicy</code> object that includes information about the retry policy settings.
**/
public class RetryPolicy {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaximumEventAgeInSeconds")
    public Long maximumEventAgeInSeconds;
    public RetryPolicy withMaximumEventAgeInSeconds(Long maximumEventAgeInSeconds) {
        this.maximumEventAgeInSeconds = maximumEventAgeInSeconds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaximumRetryAttempts")
    public Long maximumRetryAttempts;
    public RetryPolicy withMaximumRetryAttempts(Long maximumRetryAttempts) {
        this.maximumRetryAttempts = maximumRetryAttempts;
        return this;
    }
}