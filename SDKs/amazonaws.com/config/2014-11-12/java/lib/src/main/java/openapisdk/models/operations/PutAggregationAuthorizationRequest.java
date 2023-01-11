package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutAggregationAuthorizationRequest {
    public PutAggregationAuthorizationHeaders headers;
    public PutAggregationAuthorizationRequest withHeaders(PutAggregationAuthorizationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PutAggregationAuthorizationRequest request;
    public PutAggregationAuthorizationRequest withRequest(openapisdk.models.shared.PutAggregationAuthorizationRequest request) {
        this.request = request;
        return this;
    }
}