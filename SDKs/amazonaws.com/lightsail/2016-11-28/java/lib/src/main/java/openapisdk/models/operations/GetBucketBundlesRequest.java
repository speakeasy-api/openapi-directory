package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetBucketBundlesRequest {
    public GetBucketBundlesHeaders headers;
    public GetBucketBundlesRequest withHeaders(GetBucketBundlesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetBucketBundlesRequest request;
    public GetBucketBundlesRequest withRequest(openapisdk.models.shared.GetBucketBundlesRequest request) {
        this.request = request;
        return this;
    }
}