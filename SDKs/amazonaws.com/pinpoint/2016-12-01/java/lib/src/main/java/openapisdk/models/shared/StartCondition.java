package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * StartCondition
 * Specifies the conditions for the first activity in a journey. This activity and its conditions determine which users are participants in a journey.
**/
public class StartCondition {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public StartCondition withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EventStartCondition")
    public EventStartCondition eventStartCondition;
    public StartCondition withEventStartCondition(EventStartCondition eventStartCondition) {
        this.eventStartCondition = eventStartCondition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SegmentStartCondition")
    public SegmentCondition segmentStartCondition;
    public StartCondition withSegmentStartCondition(SegmentCondition segmentStartCondition) {
        this.segmentStartCondition = segmentStartCondition;
        return this;
    }
}