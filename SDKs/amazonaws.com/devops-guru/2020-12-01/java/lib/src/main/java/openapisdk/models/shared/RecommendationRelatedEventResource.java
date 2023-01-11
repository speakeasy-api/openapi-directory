package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RecommendationRelatedEventResource
 *  Information about an AWS resource that emitted and event that is related to a recommendation in an insight. 
**/
public class RecommendationRelatedEventResource {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public RecommendationRelatedEventResource withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Type")
    public String type;
    public RecommendationRelatedEventResource withType(String type) {
        this.type = type;
        return this;
    }
}