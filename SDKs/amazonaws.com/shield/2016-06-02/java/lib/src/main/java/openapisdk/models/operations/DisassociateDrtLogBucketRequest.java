package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisassociateDrtLogBucketRequest {
    public DisassociateDrtLogBucketHeaders headers;
    public DisassociateDrtLogBucketRequest withHeaders(DisassociateDrtLogBucketHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DisassociateDrtLogBucketRequest request;
    public DisassociateDrtLogBucketRequest withRequest(openapisdk.models.shared.DisassociateDrtLogBucketRequest request) {
        this.request = request;
        return this;
    }
}