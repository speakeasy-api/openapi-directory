package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BatchGetItemRequest {
    public BatchGetItemQueryParams queryParams;
    public BatchGetItemRequest withQueryParams(BatchGetItemQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public BatchGetItemHeaders headers;
    public BatchGetItemRequest withHeaders(BatchGetItemHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BatchGetItemInput request;
    public BatchGetItemRequest withRequest(openapisdk.models.shared.BatchGetItemInput request) {
        this.request = request;
        return this;
    }
}