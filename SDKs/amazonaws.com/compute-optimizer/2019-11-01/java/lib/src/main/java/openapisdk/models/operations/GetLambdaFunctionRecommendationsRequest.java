package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetLambdaFunctionRecommendationsRequest {
    public GetLambdaFunctionRecommendationsHeaders headers;
    public GetLambdaFunctionRecommendationsRequest withHeaders(GetLambdaFunctionRecommendationsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetLambdaFunctionRecommendationsRequest request;
    public GetLambdaFunctionRecommendationsRequest withRequest(openapisdk.models.shared.GetLambdaFunctionRecommendationsRequest request) {
        this.request = request;
        return this;
    }
}