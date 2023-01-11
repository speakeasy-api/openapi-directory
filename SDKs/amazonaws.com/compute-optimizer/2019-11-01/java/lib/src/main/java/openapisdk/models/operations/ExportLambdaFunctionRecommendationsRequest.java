package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ExportLambdaFunctionRecommendationsRequest {
    public ExportLambdaFunctionRecommendationsHeaders headers;
    public ExportLambdaFunctionRecommendationsRequest withHeaders(ExportLambdaFunctionRecommendationsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ExportLambdaFunctionRecommendationsRequest request;
    public ExportLambdaFunctionRecommendationsRequest withRequest(openapisdk.models.shared.ExportLambdaFunctionRecommendationsRequest request) {
        this.request = request;
        return this;
    }
}