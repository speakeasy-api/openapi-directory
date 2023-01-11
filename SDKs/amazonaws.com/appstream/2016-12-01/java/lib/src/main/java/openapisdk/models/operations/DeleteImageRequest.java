package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteImageRequest {
    public DeleteImageHeaders headers;
    public DeleteImageRequest withHeaders(DeleteImageHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteImageRequest request;
    public DeleteImageRequest withRequest(openapisdk.models.shared.DeleteImageRequest request) {
        this.request = request;
        return this;
    }
}