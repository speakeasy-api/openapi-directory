package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGetCostEstimateRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public PostGetCostEstimateRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
    public PostGetCostEstimateSecurity security;
    public PostGetCostEstimateRequest withSecurity(PostGetCostEstimateSecurity security) {
        this.security = security;
        return this;
    }
}