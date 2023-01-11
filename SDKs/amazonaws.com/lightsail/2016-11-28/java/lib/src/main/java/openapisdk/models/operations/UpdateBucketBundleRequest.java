package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateBucketBundleRequest {
    public UpdateBucketBundleHeaders headers;
    public UpdateBucketBundleRequest withHeaders(UpdateBucketBundleHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateBucketBundleRequest request;
    public UpdateBucketBundleRequest withRequest(openapisdk.models.shared.UpdateBucketBundleRequest request) {
        this.request = request;
        return this;
    }
}