package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * JourneyLimits
 * Specifies limits on the messages that a journey can send and the number of times participants can enter a journey.
**/
public class JourneyLimits {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DailyCap")
    public Long dailyCap;
    public JourneyLimits withDailyCap(Long dailyCap) {
        this.dailyCap = dailyCap;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EndpointReentryCap")
    public Long endpointReentryCap;
    public JourneyLimits withEndpointReentryCap(Long endpointReentryCap) {
        this.endpointReentryCap = endpointReentryCap;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EndpointReentryInterval")
    public String endpointReentryInterval;
    public JourneyLimits withEndpointReentryInterval(String endpointReentryInterval) {
        this.endpointReentryInterval = endpointReentryInterval;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MessagesPerSecond")
    public Long messagesPerSecond;
    public JourneyLimits withMessagesPerSecond(Long messagesPerSecond) {
        this.messagesPerSecond = messagesPerSecond;
        return this;
    }
}