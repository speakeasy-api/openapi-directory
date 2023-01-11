package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutEventSelectorsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AdvancedEventSelectors")
    public AdvancedEventSelector[] advancedEventSelectors;
    public PutEventSelectorsRequest withAdvancedEventSelectors(AdvancedEventSelector[] advancedEventSelectors) {
        this.advancedEventSelectors = advancedEventSelectors;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EventSelectors")
    public EventSelector[] eventSelectors;
    public PutEventSelectorsRequest withEventSelectors(EventSelector[] eventSelectors) {
        this.eventSelectors = eventSelectors;
        return this;
    }
    @JsonProperty("TrailName")
    public String trailName;
    public PutEventSelectorsRequest withTrailName(String trailName) {
        this.trailName = trailName;
        return this;
    }
}