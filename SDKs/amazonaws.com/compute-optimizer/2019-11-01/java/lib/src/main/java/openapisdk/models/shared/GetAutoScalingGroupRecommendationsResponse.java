package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetAutoScalingGroupRecommendationsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("autoScalingGroupRecommendations")
    public AutoScalingGroupRecommendation[] autoScalingGroupRecommendations;
    public GetAutoScalingGroupRecommendationsResponse withAutoScalingGroupRecommendations(AutoScalingGroupRecommendation[] autoScalingGroupRecommendations) {
        this.autoScalingGroupRecommendations = autoScalingGroupRecommendations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errors")
    public GetRecommendationError[] errors;
    public GetAutoScalingGroupRecommendationsResponse withErrors(GetRecommendationError[] errors) {
        this.errors = errors;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public GetAutoScalingGroupRecommendationsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}