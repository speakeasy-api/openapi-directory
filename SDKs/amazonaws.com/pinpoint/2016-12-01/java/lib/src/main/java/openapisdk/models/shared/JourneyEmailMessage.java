package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * JourneyEmailMessage
 * Specifies the "From" address for an email message that's sent to participants in a journey.
**/
public class JourneyEmailMessage {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FromAddress")
    public String fromAddress;
    public JourneyEmailMessage withFromAddress(String fromAddress) {
        this.fromAddress = fromAddress;
        return this;
    }
}