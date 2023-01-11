package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetAutoScalingGroupRecommendationsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountIds")
    public String[] accountIds;
    public GetAutoScalingGroupRecommendationsRequest withAccountIds(String[] accountIds) {
        this.accountIds = accountIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("autoScalingGroupArns")
    public String[] autoScalingGroupArns;
    public GetAutoScalingGroupRecommendationsRequest withAutoScalingGroupArns(String[] autoScalingGroupArns) {
        this.autoScalingGroupArns = autoScalingGroupArns;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filters")
    public Filter[] filters;
    public GetAutoScalingGroupRecommendationsRequest withFilters(Filter[] filters) {
        this.filters = filters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxResults")
    public Long maxResults;
    public GetAutoScalingGroupRecommendationsRequest withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public GetAutoScalingGroupRecommendationsRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recommendationPreferences")
    public RecommendationPreferences recommendationPreferences;
    public GetAutoScalingGroupRecommendationsRequest withRecommendationPreferences(RecommendationPreferences recommendationPreferences) {
        this.recommendationPreferences = recommendationPreferences;
        return this;
    }
}