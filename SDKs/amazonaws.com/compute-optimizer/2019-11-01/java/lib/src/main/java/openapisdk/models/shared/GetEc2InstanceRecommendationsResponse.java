package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetEc2InstanceRecommendationsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errors")
    public GetRecommendationError[] errors;
    public GetEc2InstanceRecommendationsResponse withErrors(GetRecommendationError[] errors) {
        this.errors = errors;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("instanceRecommendations")
    public InstanceRecommendation[] instanceRecommendations;
    public GetEc2InstanceRecommendationsResponse withInstanceRecommendations(InstanceRecommendation[] instanceRecommendations) {
        this.instanceRecommendations = instanceRecommendations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public GetEc2InstanceRecommendationsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}