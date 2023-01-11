package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class EventsSearchResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("events")
    public Event[] events;
    public EventsSearchResult withEvents(Event[] events) {
        this.events = events;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("result_count")
    public Integer resultCount;
    public EventsSearchResult withResultCount(Integer resultCount) {
        this.resultCount = resultCount;
        return this;
    }
}