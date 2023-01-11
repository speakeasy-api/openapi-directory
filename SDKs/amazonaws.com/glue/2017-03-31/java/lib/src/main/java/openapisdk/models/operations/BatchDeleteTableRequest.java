package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BatchDeleteTableRequest {
    public BatchDeleteTableHeaders headers;
    public BatchDeleteTableRequest withHeaders(BatchDeleteTableHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BatchDeleteTableRequest request;
    public BatchDeleteTableRequest withRequest(openapisdk.models.shared.BatchDeleteTableRequest request) {
        this.request = request;
        return this;
    }
}