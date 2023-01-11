package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PlainTextMessage
 * Defines an ASCII text message to send to the user.
**/
public class PlainTextMessage {
    @JsonProperty("value")
    public String value;
    public PlainTextMessage withValue(String value) {
        this.value = value;
        return this;
    }
}