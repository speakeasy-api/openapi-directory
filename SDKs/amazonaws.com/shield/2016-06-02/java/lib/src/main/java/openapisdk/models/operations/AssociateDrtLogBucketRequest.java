package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AssociateDrtLogBucketRequest {
    public AssociateDrtLogBucketHeaders headers;
    public AssociateDrtLogBucketRequest withHeaders(AssociateDrtLogBucketHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AssociateDrtLogBucketRequest request;
    public AssociateDrtLogBucketRequest withRequest(openapisdk.models.shared.AssociateDrtLogBucketRequest request) {
        this.request = request;
        return this;
    }
}