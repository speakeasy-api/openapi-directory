package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetEventSelectorsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AdvancedEventSelectors")
    public AdvancedEventSelector[] advancedEventSelectors;
    public GetEventSelectorsResponse withAdvancedEventSelectors(AdvancedEventSelector[] advancedEventSelectors) {
        this.advancedEventSelectors = advancedEventSelectors;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EventSelectors")
    public EventSelector[] eventSelectors;
    public GetEventSelectorsResponse withEventSelectors(EventSelector[] eventSelectors) {
        this.eventSelectors = eventSelectors;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TrailARN")
    public String trailARN;
    public GetEventSelectorsResponse withTrailArn(String trailARN) {
        this.trailARN = trailARN;
        return this;
    }
}