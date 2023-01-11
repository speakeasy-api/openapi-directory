package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RecommendationRelatedEvent
 *  Information about an event that is related to a recommendation. 
**/
public class RecommendationRelatedEvent {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public RecommendationRelatedEvent withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Resources")
    public RecommendationRelatedEventResource[] resources;
    public RecommendationRelatedEvent withResources(RecommendationRelatedEventResource[] resources) {
        this.resources = resources;
        return this;
    }
}