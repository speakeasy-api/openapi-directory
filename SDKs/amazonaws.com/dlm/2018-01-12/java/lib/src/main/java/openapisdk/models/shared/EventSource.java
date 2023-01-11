package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EventSource
 * Specifies an event that triggers an event-based policy.
**/
public class EventSource {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Parameters")
    public EventParameters parameters;
    public EventSource withParameters(EventParameters parameters) {
        this.parameters = parameters;
        return this;
    }
    @JsonProperty("Type")
    public EventSourceValuesEnum type;
    public EventSource withType(EventSourceValuesEnum type) {
        this.type = type;
        return this;
    }
}