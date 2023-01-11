package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * JourneyCustomMessage
 * Specifies the message content for a custom channel message that's sent to participants in a journey.
**/
public class JourneyCustomMessage {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Data")
    public String data;
    public JourneyCustomMessage withData(String data) {
        this.data = data;
        return this;
    }
}