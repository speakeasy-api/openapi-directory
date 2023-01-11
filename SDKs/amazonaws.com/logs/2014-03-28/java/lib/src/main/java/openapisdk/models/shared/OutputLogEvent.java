package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OutputLogEvent
 * Represents a log event.
**/
public class OutputLogEvent {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ingestionTime")
    public Long ingestionTime;
    public OutputLogEvent withIngestionTime(Long ingestionTime) {
        this.ingestionTime = ingestionTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public OutputLogEvent withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timestamp")
    public Long timestamp;
    public OutputLogEvent withTimestamp(Long timestamp) {
        this.timestamp = timestamp;
        return this;
    }
}