package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UntagResourcesRequest {
    public UntagResourcesHeaders headers;
    public UntagResourcesRequest withHeaders(UntagResourcesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UntagResourcesInput request;
    public UntagResourcesRequest withRequest(openapisdk.models.shared.UntagResourcesInput request) {
        this.request = request;
        return this;
    }
}