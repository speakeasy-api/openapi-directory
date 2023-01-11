package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BatchExecuteStatementRequest {
    public BatchExecuteStatementHeaders headers;
    public BatchExecuteStatementRequest withHeaders(BatchExecuteStatementHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BatchExecuteStatementInput request;
    public BatchExecuteStatementRequest withRequest(openapisdk.models.shared.BatchExecuteStatementInput request) {
        this.request = request;
        return this;
    }
}