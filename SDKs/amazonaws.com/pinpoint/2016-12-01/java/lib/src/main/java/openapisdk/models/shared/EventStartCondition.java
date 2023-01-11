package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EventStartCondition
 * Specifies the settings for an event that causes a journey activity to start.
**/
public class EventStartCondition {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EventFilter")
    public EventFilter eventFilter;
    public EventStartCondition withEventFilter(EventFilter eventFilter) {
        this.eventFilter = eventFilter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SegmentId")
    public String segmentId;
    public EventStartCondition withSegmentId(String segmentId) {
        this.segmentId = segmentId;
        return this;
    }
}