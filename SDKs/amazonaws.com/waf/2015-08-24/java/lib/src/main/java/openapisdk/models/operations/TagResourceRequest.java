package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TagResourceRequest {
    public TagResourceHeaders headers;
    public TagResourceRequest withHeaders(TagResourceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.TagResourceRequest request;
    public TagResourceRequest withRequest(openapisdk.models.shared.TagResourceRequest request) {
        this.request = request;
        return this;
    }
}