package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * InputLogEvent
 * Represents a log event, which is a record of activity that was recorded by the application or resource being monitored.
**/
public class InputLogEvent {
    @JsonProperty("message")
    public String message;
    public InputLogEvent withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonProperty("timestamp")
    public Long timestamp;
    public InputLogEvent withTimestamp(Long timestamp) {
        this.timestamp = timestamp;
        return this;
    }
}