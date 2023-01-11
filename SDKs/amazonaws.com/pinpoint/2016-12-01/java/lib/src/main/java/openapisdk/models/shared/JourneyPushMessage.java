package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * JourneyPushMessage
 * Specifies the message configuration for a push notification that's sent to participants in a journey.
**/
public class JourneyPushMessage {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TimeToLive")
    public String timeToLive;
    public JourneyPushMessage withTimeToLive(String timeToLive) {
        this.timeToLive = timeToLive;
        return this;
    }
}