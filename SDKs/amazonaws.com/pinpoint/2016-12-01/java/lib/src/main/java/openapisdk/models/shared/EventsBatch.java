package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class EventsBatch {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Endpoint")
    public PublicEndpoint endpoint;
    public EventsBatch withEndpoint(PublicEndpoint endpoint) {
        this.endpoint = endpoint;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Events")
    public java.util.Map<String, Event> events;
    public EventsBatch withEvents(java.util.Map<String, Event> events) {
        this.events = events;
        return this;
    }
}