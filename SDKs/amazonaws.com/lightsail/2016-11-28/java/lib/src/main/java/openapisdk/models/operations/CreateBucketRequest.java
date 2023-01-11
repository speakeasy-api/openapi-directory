package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateBucketRequest {
    public CreateBucketHeaders headers;
    public CreateBucketRequest withHeaders(CreateBucketHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateBucketRequest request;
    public CreateBucketRequest withRequest(openapisdk.models.shared.CreateBucketRequest request) {
        this.request = request;
        return this;
    }
}