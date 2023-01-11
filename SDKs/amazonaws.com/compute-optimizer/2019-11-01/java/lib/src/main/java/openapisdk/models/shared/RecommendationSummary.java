package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RecommendationSummary
 * A summary of a recommendation.
**/
public class RecommendationSummary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountId")
    public String accountId;
    public RecommendationSummary withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recommendationResourceType")
    public RecommendationSourceTypeEnum recommendationResourceType;
    public RecommendationSummary withRecommendationResourceType(RecommendationSourceTypeEnum recommendationResourceType) {
        this.recommendationResourceType = recommendationResourceType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("summaries")
    public Summary[] summaries;
    public RecommendationSummary withSummaries(Summary[] summaries) {
        this.summaries = summaries;
        return this;
    }
}