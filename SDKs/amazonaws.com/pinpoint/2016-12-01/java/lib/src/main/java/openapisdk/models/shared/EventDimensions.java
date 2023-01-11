package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EventDimensions
 * Specifies the dimensions for an event filter that determines when a campaign is sent or a journey activity is performed.
**/
public class EventDimensions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Attributes")
    public java.util.Map<String, AttributeDimension> attributes;
    public EventDimensions withAttributes(java.util.Map<String, AttributeDimension> attributes) {
        this.attributes = attributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EventType")
    public SetDimension eventType;
    public EventDimensions withEventType(SetDimension eventType) {
        this.eventType = eventType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Metrics")
    public java.util.Map<String, MetricDimension> metrics;
    public EventDimensions withMetrics(java.util.Map<String, MetricDimension> metrics) {
        this.metrics = metrics;
        return this;
    }
}