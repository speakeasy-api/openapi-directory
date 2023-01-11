package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BatchDeleteImageRequest {
    public BatchDeleteImageHeaders headers;
    public BatchDeleteImageRequest withHeaders(BatchDeleteImageHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BatchDeleteImageRequest request;
    public BatchDeleteImageRequest withRequest(openapisdk.models.shared.BatchDeleteImageRequest request) {
        this.request = request;
        return this;
    }
}