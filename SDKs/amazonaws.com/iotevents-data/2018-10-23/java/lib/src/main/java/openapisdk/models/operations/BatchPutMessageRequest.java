package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BatchPutMessageRequest {
    public BatchPutMessageHeaders headers;
    public BatchPutMessageRequest withHeaders(BatchPutMessageHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public BatchPutMessageRequestBody request;
    public BatchPutMessageRequest withRequest(BatchPutMessageRequestBody request) {
        this.request = request;
        return this;
    }
}