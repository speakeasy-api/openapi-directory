package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * EventFilter
 * The event filter.
**/
public class EventFilter {
    @JsonProperty("Source")
    public String source;
    public EventFilter withSource(String source) {
        this.source = source;
        return this;
    }
}