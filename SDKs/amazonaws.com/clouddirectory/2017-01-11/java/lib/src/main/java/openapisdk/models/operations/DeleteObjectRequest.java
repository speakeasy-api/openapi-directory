package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteObjectRequest {
    public DeleteObjectHeaders headers;
    public DeleteObjectRequest withHeaders(DeleteObjectHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public DeleteObjectRequestBody request;
    public DeleteObjectRequest withRequest(DeleteObjectRequestBody request) {
        this.request = request;
        return this;
    }
}