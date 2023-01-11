package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SplunkRetryOptions
 * Configures retry behavior in case Kinesis Data Firehose is unable to deliver documents to Splunk, or if it doesn't receive an acknowledgment from Splunk.
**/
public class SplunkRetryOptions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DurationInSeconds")
    public Long durationInSeconds;
    public SplunkRetryOptions withDurationInSeconds(Long durationInSeconds) {
        this.durationInSeconds = durationInSeconds;
        return this;
    }
}