package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BatchGetStreamKeyRequest {
    public BatchGetStreamKeyHeaders headers;
    public BatchGetStreamKeyRequest withHeaders(BatchGetStreamKeyHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public BatchGetStreamKeyRequestBody request;
    public BatchGetStreamKeyRequest withRequest(BatchGetStreamKeyRequestBody request) {
        this.request = request;
        return this;
    }
}