package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListEventSourceMappingsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EventSourceMappings")
    public EventSourceMappingConfiguration[] eventSourceMappings;
    public ListEventSourceMappingsResponse withEventSourceMappings(EventSourceMappingConfiguration[] eventSourceMappings) {
        this.eventSourceMappings = eventSourceMappings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextMarker")
    public String nextMarker;
    public ListEventSourceMappingsResponse withNextMarker(String nextMarker) {
        this.nextMarker = nextMarker;
        return this;
    }
}