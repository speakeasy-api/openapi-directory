package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UntagResourceRequest {
    public UntagResourceHeaders headers;
    public UntagResourceRequest withHeaders(UntagResourceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UntagResourceRequest request;
    public UntagResourceRequest withRequest(openapisdk.models.shared.UntagResourceRequest request) {
        this.request = request;
        return this;
    }
}