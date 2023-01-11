package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Event
 * A JSON object representing a batch of unique event occurrences in your app.
**/
public class Event {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attributes")
    public java.util.Map<String, String> attributes;
    public Event withAttributes(java.util.Map<String, String> attributes) {
        this.attributes = attributes;
        return this;
    }
    @JsonProperty("eventType")
    public String eventType;
    public Event withEventType(String eventType) {
        this.eventType = eventType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metrics")
    public java.util.Map<String, Double> metrics;
    public Event withMetrics(java.util.Map<String, Double> metrics) {
        this.metrics = metrics;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("session")
    public Session session;
    public Event withSession(Session session) {
        this.session = session;
        return this;
    }
    @JsonProperty("timestamp")
    public String timestamp;
    public Event withTimestamp(String timestamp) {
        this.timestamp = timestamp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version")
    public String version;
    public Event withVersion(String version) {
        this.version = version;
        return this;
    }
}