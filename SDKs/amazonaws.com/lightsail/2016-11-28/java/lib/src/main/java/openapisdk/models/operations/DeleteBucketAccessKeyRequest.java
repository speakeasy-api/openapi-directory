package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteBucketAccessKeyRequest {
    public DeleteBucketAccessKeyHeaders headers;
    public DeleteBucketAccessKeyRequest withHeaders(DeleteBucketAccessKeyHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteBucketAccessKeyRequest request;
    public DeleteBucketAccessKeyRequest withRequest(openapisdk.models.shared.DeleteBucketAccessKeyRequest request) {
        this.request = request;
        return this;
    }
}