package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteBucketRequest {
    public DeleteBucketHeaders headers;
    public DeleteBucketRequest withHeaders(DeleteBucketHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteBucketRequest request;
    public DeleteBucketRequest withRequest(openapisdk.models.shared.DeleteBucketRequest request) {
        this.request = request;
        return this;
    }
}