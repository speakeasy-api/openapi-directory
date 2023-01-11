package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StartCostEstimationRequest {
    public StartCostEstimationHeaders headers;
    public StartCostEstimationRequest withHeaders(StartCostEstimationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public StartCostEstimationRequestBody request;
    public StartCostEstimationRequest withRequest(StartCostEstimationRequestBody request) {
        this.request = request;
        return this;
    }
}