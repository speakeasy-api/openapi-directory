package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RecommendationRelatedAnomaly
 *  Information about an anomaly that is related to a recommendation. 
**/
public class RecommendationRelatedAnomaly {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Resources")
    public RecommendationRelatedAnomalyResource[] resources;
    public RecommendationRelatedAnomaly withResources(RecommendationRelatedAnomalyResource[] resources) {
        this.resources = resources;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SourceDetails")
    public RecommendationRelatedAnomalySourceDetail[] sourceDetails;
    public RecommendationRelatedAnomaly withSourceDetails(RecommendationRelatedAnomalySourceDetail[] sourceDetails) {
        this.sourceDetails = sourceDetails;
        return this;
    }
}