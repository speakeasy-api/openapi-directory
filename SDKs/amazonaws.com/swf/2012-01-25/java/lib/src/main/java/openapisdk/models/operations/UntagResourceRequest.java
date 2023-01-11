package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UntagResourceRequest {
    public UntagResourceHeaders headers;
    public UntagResourceRequest withHeaders(UntagResourceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UntagResourceInput request;
    public UntagResourceRequest withRequest(openapisdk.models.shared.UntagResourceInput request) {
        this.request = request;
        return this;
    }
}