package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetBundlesRequest {
    public GetBundlesHeaders headers;
    public GetBundlesRequest withHeaders(GetBundlesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetBundlesRequest request;
    public GetBundlesRequest withRequest(openapisdk.models.shared.GetBundlesRequest request) {
        this.request = request;
        return this;
    }
}