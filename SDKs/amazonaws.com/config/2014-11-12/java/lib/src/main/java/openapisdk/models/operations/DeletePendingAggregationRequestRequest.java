package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeletePendingAggregationRequestRequest {
    public DeletePendingAggregationRequestHeaders headers;
    public DeletePendingAggregationRequestRequest withHeaders(DeletePendingAggregationRequestHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeletePendingAggregationRequestRequest request;
    public DeletePendingAggregationRequestRequest withRequest(openapisdk.models.shared.DeletePendingAggregationRequestRequest request) {
        this.request = request;
        return this;
    }
}