package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateBucketRequest {
    public UpdateBucketHeaders headers;
    public UpdateBucketRequest withHeaders(UpdateBucketHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateBucketRequest request;
    public UpdateBucketRequest withRequest(openapisdk.models.shared.UpdateBucketRequest request) {
        this.request = request;
        return this;
    }
}