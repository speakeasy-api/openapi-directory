package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetLambdaFunctionRecommendationsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lambdaFunctionRecommendations")
    public LambdaFunctionRecommendation[] lambdaFunctionRecommendations;
    public GetLambdaFunctionRecommendationsResponse withLambdaFunctionRecommendations(LambdaFunctionRecommendation[] lambdaFunctionRecommendations) {
        this.lambdaFunctionRecommendations = lambdaFunctionRecommendations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public GetLambdaFunctionRecommendationsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}