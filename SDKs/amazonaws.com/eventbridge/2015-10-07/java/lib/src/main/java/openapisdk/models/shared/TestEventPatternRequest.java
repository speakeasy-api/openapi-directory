package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class TestEventPatternRequest {
    @JsonProperty("Event")
    public String event;
    public TestEventPatternRequest withEvent(String event) {
        this.event = event;
        return this;
    }
    @JsonProperty("EventPattern")
    public String eventPattern;
    public TestEventPatternRequest withEventPattern(String eventPattern) {
        this.eventPattern = eventPattern;
        return this;
    }
}