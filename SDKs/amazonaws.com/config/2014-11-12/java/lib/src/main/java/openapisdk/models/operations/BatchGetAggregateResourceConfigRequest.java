package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BatchGetAggregateResourceConfigRequest {
    public BatchGetAggregateResourceConfigHeaders headers;
    public BatchGetAggregateResourceConfigRequest withHeaders(BatchGetAggregateResourceConfigHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BatchGetAggregateResourceConfigRequest request;
    public BatchGetAggregateResourceConfigRequest withRequest(openapisdk.models.shared.BatchGetAggregateResourceConfigRequest request) {
        this.request = request;
        return this;
    }
}