package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BatchDeleteWorldsRequest {
    public BatchDeleteWorldsHeaders headers;
    public BatchDeleteWorldsRequest withHeaders(BatchDeleteWorldsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public BatchDeleteWorldsRequestBody request;
    public BatchDeleteWorldsRequest withRequest(BatchDeleteWorldsRequestBody request) {
        this.request = request;
        return this;
    }
}