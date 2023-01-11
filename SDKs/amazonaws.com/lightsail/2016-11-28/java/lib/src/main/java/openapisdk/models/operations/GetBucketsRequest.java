package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetBucketsRequest {
    public GetBucketsHeaders headers;
    public GetBucketsRequest withHeaders(GetBucketsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetBucketsRequest request;
    public GetBucketsRequest withRequest(openapisdk.models.shared.GetBucketsRequest request) {
        this.request = request;
        return this;
    }
}