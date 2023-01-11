package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BatchGetImageRequest {
    public BatchGetImageHeaders headers;
    public BatchGetImageRequest withHeaders(BatchGetImageHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BatchGetImageRequest request;
    public BatchGetImageRequest withRequest(openapisdk.models.shared.BatchGetImageRequest request) {
        this.request = request;
        return this;
    }
}