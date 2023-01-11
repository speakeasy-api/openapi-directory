package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BatchDeleteTableVersionRequest {
    public BatchDeleteTableVersionHeaders headers;
    public BatchDeleteTableVersionRequest withHeaders(BatchDeleteTableVersionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BatchDeleteTableVersionRequest request;
    public BatchDeleteTableVersionRequest withRequest(openapisdk.models.shared.BatchDeleteTableVersionRequest request) {
        this.request = request;
        return this;
    }
}