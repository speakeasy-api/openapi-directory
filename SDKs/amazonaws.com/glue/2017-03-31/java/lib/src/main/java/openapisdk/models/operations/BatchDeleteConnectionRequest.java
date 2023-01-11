package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BatchDeleteConnectionRequest {
    public BatchDeleteConnectionHeaders headers;
    public BatchDeleteConnectionRequest withHeaders(BatchDeleteConnectionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BatchDeleteConnectionRequest request;
    public BatchDeleteConnectionRequest withRequest(openapisdk.models.shared.BatchDeleteConnectionRequest request) {
        this.request = request;
        return this;
    }
}