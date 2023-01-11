package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * HttpEndpointRetryOptions
 * Describes the retry behavior in case Kinesis Data Firehose is unable to deliver data to the specified HTTP endpoint destination, or if it doesn't receive a valid acknowledgment of receipt from the specified HTTP endpoint destination.
**/
public class HttpEndpointRetryOptions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DurationInSeconds")
    public Long durationInSeconds;
    public HttpEndpointRetryOptions withDurationInSeconds(Long durationInSeconds) {
        this.durationInSeconds = durationInSeconds;
        return this;
    }
}