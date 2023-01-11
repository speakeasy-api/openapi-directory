package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListEventSourcesResponse
 * Contains a list of event sources (see <a>API_EventSourceConfiguration</a>)
**/
public class ListEventSourcesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EventSources")
    public EventSourceConfiguration[] eventSources;
    public ListEventSourcesResponse withEventSources(EventSourceConfiguration[] eventSources) {
        this.eventSources = eventSources;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextMarker")
    public String nextMarker;
    public ListEventSourcesResponse withNextMarker(String nextMarker) {
        this.nextMarker = nextMarker;
        return this;
    }
}