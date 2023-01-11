package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateBucketAccessKeyRequest {
    public CreateBucketAccessKeyHeaders headers;
    public CreateBucketAccessKeyRequest withHeaders(CreateBucketAccessKeyHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateBucketAccessKeyRequest request;
    public CreateBucketAccessKeyRequest withRequest(openapisdk.models.shared.CreateBucketAccessKeyRequest request) {
        this.request = request;
        return this;
    }
}