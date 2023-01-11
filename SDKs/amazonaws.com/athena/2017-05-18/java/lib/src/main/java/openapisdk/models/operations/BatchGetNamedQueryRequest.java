package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BatchGetNamedQueryRequest {
    public BatchGetNamedQueryHeaders headers;
    public BatchGetNamedQueryRequest withHeaders(BatchGetNamedQueryHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BatchGetNamedQueryInput request;
    public BatchGetNamedQueryRequest withRequest(openapisdk.models.shared.BatchGetNamedQueryInput request) {
        this.request = request;
        return this;
    }
}