package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetEc2InstanceRecommendationsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountIds")
    public String[] accountIds;
    public GetEc2InstanceRecommendationsRequest withAccountIds(String[] accountIds) {
        this.accountIds = accountIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filters")
    public Filter[] filters;
    public GetEc2InstanceRecommendationsRequest withFilters(Filter[] filters) {
        this.filters = filters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("instanceArns")
    public String[] instanceArns;
    public GetEc2InstanceRecommendationsRequest withInstanceArns(String[] instanceArns) {
        this.instanceArns = instanceArns;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxResults")
    public Long maxResults;
    public GetEc2InstanceRecommendationsRequest withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public GetEc2InstanceRecommendationsRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recommendationPreferences")
    public RecommendationPreferences recommendationPreferences;
    public GetEc2InstanceRecommendationsRequest withRecommendationPreferences(RecommendationPreferences recommendationPreferences) {
        this.recommendationPreferences = recommendationPreferences;
        return this;
    }
}