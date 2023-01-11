package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RecommendationSource
 * Describes the source of a recommendation, such as an Amazon EC2 instance or Auto Scaling group.
**/
public class RecommendationSource {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recommendationSourceArn")
    public String recommendationSourceArn;
    public RecommendationSource withRecommendationSourceArn(String recommendationSourceArn) {
        this.recommendationSourceArn = recommendationSourceArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recommendationSourceType")
    public RecommendationSourceTypeEnum recommendationSourceType;
    public RecommendationSource withRecommendationSourceType(RecommendationSourceTypeEnum recommendationSourceType) {
        this.recommendationSourceType = recommendationSourceType;
        return this;
    }
}