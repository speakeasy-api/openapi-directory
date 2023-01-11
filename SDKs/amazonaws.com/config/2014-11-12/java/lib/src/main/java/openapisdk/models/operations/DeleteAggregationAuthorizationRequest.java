package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteAggregationAuthorizationRequest {
    public DeleteAggregationAuthorizationHeaders headers;
    public DeleteAggregationAuthorizationRequest withHeaders(DeleteAggregationAuthorizationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteAggregationAuthorizationRequest request;
    public DeleteAggregationAuthorizationRequest withRequest(openapisdk.models.shared.DeleteAggregationAuthorizationRequest request) {
        this.request = request;
        return this;
    }
}