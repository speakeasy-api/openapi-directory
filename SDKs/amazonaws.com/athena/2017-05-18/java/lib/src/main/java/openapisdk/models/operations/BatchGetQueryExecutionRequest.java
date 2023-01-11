package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BatchGetQueryExecutionRequest {
    public BatchGetQueryExecutionHeaders headers;
    public BatchGetQueryExecutionRequest withHeaders(BatchGetQueryExecutionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BatchGetQueryExecutionInput request;
    public BatchGetQueryExecutionRequest withRequest(openapisdk.models.shared.BatchGetQueryExecutionInput request) {
        this.request = request;
        return this;
    }
}