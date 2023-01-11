package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SetResourceAccessForBucketRequest {
    public SetResourceAccessForBucketHeaders headers;
    public SetResourceAccessForBucketRequest withHeaders(SetResourceAccessForBucketHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SetResourceAccessForBucketRequest request;
    public SetResourceAccessForBucketRequest withRequest(openapisdk.models.shared.SetResourceAccessForBucketRequest request) {
        this.request = request;
        return this;
    }
}