package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetBucketAccessKeysRequest {
    public GetBucketAccessKeysHeaders headers;
    public GetBucketAccessKeysRequest withHeaders(GetBucketAccessKeysHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetBucketAccessKeysRequest request;
    public GetBucketAccessKeysRequest withRequest(openapisdk.models.shared.GetBucketAccessKeysRequest request) {
        this.request = request;
        return this;
    }
}